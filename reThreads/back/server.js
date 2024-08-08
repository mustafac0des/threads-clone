import express from "express";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";

import user_routes from "./routes/user_routes.js";
import post_routes from "./routes/post_routes.js";

configDotenv();

(async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected: " + conn.connection.host);
  } catch (err) {
    console.error("Error: " + err.message);
    process.exit(1);
  }
})();

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", user_routes);
app.use("/api/posts", post_routes);

const PORT = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, () =>
  console.log("Server started at http://localhost:" + PORT),
);
