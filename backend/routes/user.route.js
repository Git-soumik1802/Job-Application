import express from "express";

import {
    login,
    logout,
    register,
    updateProfile
} from "../controllers/user.controller.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";

import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// ================= REGISTER =================
router.post(
    "/register",
    register
);

// ================= LOGIN =================
router.post(
    "/login",
    login
);

// ================= LOGOUT =================
router.get(
    "/logout",
    logout
);

// ================= UPDATE PROFILE =================
router.post(
    "/profile/update",
    isAuthenticated,
    singleUpload,
    updateProfile
);

export default router;