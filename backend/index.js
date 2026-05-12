import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import connectDB from "./utils/db.js";

import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

const __dirname = path.resolve();

// ================= DATABASE =================
connectDB();

// ================= MIDDLEWARE =================
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// ================= API ROUTES =================
app.use("/api/v1/user", userRoute);

app.use("/api/v1/company", companyRoute);

app.use("/api/v1/job", jobRoute);

app.use("/api/v1/application", applicationRoute);

// ================= TEST ROUTE =================
app.get("/api/test", (req, res) => {
  res.send("API Working Successfully");
});

// ================= FRONTEND STATIC =================
app.use(
  express.static(
    path.join(__dirname, "../frontend/dist")
  )
);

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname,
      "../frontend",
      "dist",
      "index.html"
    )
  );
});

// ================= SERVER =================
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});