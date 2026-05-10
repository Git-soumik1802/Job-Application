import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";

import singleUpload from "../middlewares/multer.js";

import {
    getCompanies,
    getCompanyById,
    registerCompany,
    updateCompany
} from "../controllers/company.controller.js";

const router = express.Router();

// ================= REGISTER COMPANY =================
router.post(
    "/register",
    isAuthenticated,
    registerCompany
);

// ================= GET ALL COMPANIES =================
router.get(
    "/get",
    isAuthenticated,
    getCompanies
);

// ================= GET COMPANY BY ID =================
router.get(
    "/get/:id",
    isAuthenticated,
    getCompanyById
);

// ================= UPDATE COMPANY =================
router.put(
    "/update/:id",
    isAuthenticated,
    singleUpload,
    updateCompany
);

export default router;