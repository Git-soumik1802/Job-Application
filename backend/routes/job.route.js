import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";

import {
    getAdminJobs,
    getAllJobs,
    getJobById,
    postJob,
    createDummyJob
} from "../controllers/job.controller.js";

const router = express.Router();

// ================= POST JOB =================
router.route("/post").post(isAuthenticated, postJob);

// ================= GET ALL JOBS =================
router.route("/get").get(getAllJobs);

// ================= GET ADMIN JOBS =================
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);

// ================= GET JOB BY ID =================
router.route("/get/:id").get(getJobById);

// ================= CREATE DUMMY JOB =================
router.route("/dummy").get(createDummyJob);

export default router;
