import { User } from "../models/user.model.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import getDataUri from "../utils/datauri.js";

import cloudinary from "../utils/cloudinary.js";

// ================= REGISTER =================
export const register = async (req, res) => {
    try {

        const {
            fullname,
            email,
            phoneNumber,
            password,
            role
        } = req.body;

        if (
            !fullname ||
            !email ||
            !phoneNumber ||
            !password ||
            !role
        ) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: "User already exists.",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let profilePhoto = "";

        // ================= PROFILE PHOTO =================
        if (req.file) {

            const fileUri = getDataUri(req.file);

            const cloudResponse =
                await cloudinary.uploader.upload(
                    fileUri.content
                );

            profilePhoto = cloudResponse.secure_url;
        }

        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            profile: {
                profilePhoto
            }
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};

// ================= LOGIN =================
export const login = async (req, res) => {
    try {

        const {
            email,
            password,
            role
        } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        const isPasswordMatch =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        // ================= ROLE CHECK =================
        if (role !== user.role) {

            return res.status(400).json({
                message: "Role mismatch",
                success: false
            });
        }

        const tokenData = {
            userId: user._id
        };

        const token = jwt.sign(
            tokenData,
            process.env.SECRET_KEY,
            {
                expiresIn: "1d"
            }
        );

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res
            .status(200)
            .cookie("token", token, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "strict"
            })
            .json({
                message: `Welcome back ${user.fullname}`,
                user,
                success: true
            });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};

// ================= LOGOUT =================
export const logout = async (req, res) => {
    try {

        return res
            .status(200)
            .cookie("token", "", {
                maxAge: 0
            })
            .json({
                message: "Logged out successfully.",
                success: true
            });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};

// ================= UPDATE PROFILE =================
export const updateProfile = async (req, res) => {
    try {

        const {
            fullname,
            email,
            phoneNumber,
            bio,
            skills
        } = req.body;

        const userId = req.id;

        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            });
        }

        if (fullname) user.fullname = fullname;

        if (email) user.email = email;

        if (phoneNumber) user.phoneNumber = phoneNumber;

        if (!user.profile) {
            user.profile = {};
        }

        if (bio) {
            user.profile.bio = bio;
        }

        if (skills) {
            user.profile.skills =
                skills.split(",");
        }

        // ================= PROFILE PHOTO =================
        if (req.file) {

            const fileUri = getDataUri(req.file);

            const cloudResponse =
                await cloudinary.uploader.upload(
                    fileUri.content,
                    {
                        folder: "NexHire_profiles"
                    }
                );

            user.profile.profilePhoto =
                cloudResponse.secure_url;
        }

        await user.save();

        const updatedUser = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200).json({
            message: "Profile updated successfully.",
            user: updatedUser,
            success: true
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Update failed",
            success: false
        });
    }
};