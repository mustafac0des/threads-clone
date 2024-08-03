import express from "express";
import mongoose from "mongoose";
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", user_routes);
app.use("/api/posts", post_routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log("Server started at http://localhost:" + PORT),
);
