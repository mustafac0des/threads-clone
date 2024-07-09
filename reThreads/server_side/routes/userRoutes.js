import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
  followUnfollow,
  updateUser,
} from "../controllers/userController.js";

import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/update/:id", protectRoute, updateUser);
router.post("/followUnfollow/:id", protectRoute, followUnfollow);

export default router;
