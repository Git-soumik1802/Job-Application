import multer from "multer";

// ================= STORAGE =================
const storage = multer.memoryStorage();

// ================= SINGLE FILE UPLOAD =================
const singleUpload = multer({
    storage
}).single("file");

export default singleUpload;