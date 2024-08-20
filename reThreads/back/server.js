import express from "express";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

configDotenv();

(async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected: " + conn.connection.host);
  } catch (err) {
    console.log("Error: " + err.message);
    process.exit(1);
  }
})();

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, () =>
  console.log("Server started at http://localhost:" + PORT),
);
