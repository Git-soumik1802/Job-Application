import mongoose from "mongoose";
import dotenv from "dotenv";

import { Job } from "./models/job.model.js";
import { Company } from "./models/company.model.js";

dotenv.config();

// ================= CONNECT DATABASE =================

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");

    } catch (error) {

        console.log(error);
    }
};

// ================= SEED FUNCTION =================

const seedData = async () => {

    try {

        await connectDB();

        // ================= CLEAR OLD DATA =================

        await Job.deleteMany({});
        await Company.deleteMany({});

        // ================= CREATE COMPANIES =================

        const companies = await Company.insertMany([

            {
                name: "Google",
                description: "Tech Company",
                location: "Bangalore",
                website: "https://google.com",
                userId: new mongoose.Types.ObjectId()
            },

            {
                name: "Microsoft",
                description: "Software Company",
                location: "Hyderabad",
                website: "https://microsoft.com",
                userId: new mongoose.Types.ObjectId()
            },

            {
                name: "Amazon",
                description: "Ecommerce Company",
                location: "Pune",
                website: "https://amazon.com",
                userId: new mongoose.Types.ObjectId()
            },

            {
                name: "Infosys",
                description: "IT Company",
                location: "Delhi NCR",
                website: "https://infosys.com",
                userId: new mongoose.Types.ObjectId()
            },

            {
                name: "TCS",
                description: "Service Company",
                location: "Mumbai",
                website: "https://tcs.com",
                userId: new mongoose.Types.ObjectId()
            }

        ]);

        // ================= CREATE JOBS =================

        const jobs = [

            {
                title: "Frontend Developer",
                description: "React developer required",
                requirements: ["React", "Tailwind", "JavaScript"],
                salary: 12,
                location: "Bangalore",
                jobType: "Full Time",
                experienceLevel: 2,
                position: 5,
                company: companies[0]._id,
                created_by: companies[0].userId
            },

            {
                title: "Backend Developer",
                description: "Node.js developer required",
                requirements: ["Node", "Express", "MongoDB"],
                salary: 15,
                location: "Hyderabad",
                jobType: "Remote",
                experienceLevel: 3,
                position: 4,
                company: companies[1]._id,
                created_by: companies[1].userId
            },

            {
                title: "Full Stack Developer",
                description: "MERN stack engineer",
                requirements: ["React", "Node", "MongoDB"],
                salary: 18,
                location: "Pune",
                jobType: "Full Time",
                experienceLevel: 2,
                position: 6,
                company: companies[2]._id,
                created_by: companies[2].userId
            },

            {
                title: "UI UX Designer",
                description: "Creative designer needed",
                requirements: ["Figma", "Adobe XD"],
                salary: 10,
                location: "Delhi NCR",
                jobType: "Part Time",
                experienceLevel: 1,
                position: 3,
                company: companies[3]._id,
                created_by: companies[3].userId
            },

            {
                title: "HR Executive",
                description: "HR management role",
                requirements: ["Communication", "Hiring"],
                salary: 8,
                location: "Mumbai",
                jobType: "Full Time",
                experienceLevel: 1,
                position: 2,
                company: companies[4]._id,
                created_by: companies[4].userId
            }

        ];

        // ================= INSERT JOBS =================

        await Job.insertMany(jobs);

        console.log("Dummy Companies & Jobs Inserted Successfully");

        process.exit();

    } catch (error) {

        console.log(error);

        process.exit(1);
    }
};

seedData();