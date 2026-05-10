import { Job } from "../models/job.model.js";

// ================= POST JOB =================
export const postJob = async (req, res) => {
    try {
        const {
            title,
            description,
            requirements,
            salary,
            location,
            jobType,
            experience,
            position,
            companyId
        } = req.body;

        const userId = req.id;

        if (
            !title ||
            !description ||
            !requirements ||
            !salary ||
            !location ||
            !jobType ||
            !experience ||
            !position ||
            !companyId
        ) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });

        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server Error",
            success: false
        });
    }
};

// ================= GET ALL JOBS =================
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";

        const query = {
            $or: [
                {
                    title: {
                        $regex: keyword,
                        $options: "i"
                    }
                },
                {
                    description: {
                        $regex: keyword,
                        $options: "i"
                    }
                }
            ]
        };

        const jobs = await Job.find(query)
            .populate({
                path: "company"
            })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server Error",
            success: false
        });
    }
};

// ================= GET JOB BY ID =================
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId).populate({
            path: "applications"
        });

        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false
            });
        }

        return res.status(200).json({
            job,
            success: true
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server Error",
            success: false
        });
    }
};

// ================= GET ADMIN JOBS =================
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;

        const jobs = await Job.find({
            created_by: adminId
        })
            .populate({
                path: "company"
            })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server Error",
            success: false
        });
    }
};

// ================= CREATE DUMMY JOB =================
export const createDummyJob = async (req, res) => {
    try {

        const job = await Job.create({
            title: "Frontend Developer",
            description: "React Developer Required",
            requirements: ["React", "JavaScript", "Tailwind CSS"],
            salary: 12,
            location: "Bangalore",
            jobType: "Full Time",
            experienceLevel: 2,
            position: 3,
            company: null,
            created_by: null
        });

        return res.status(201).json({
            message: "Dummy Job Created Successfully",
            job,
            success: true
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server Error",
            success: false
        });
    }
};