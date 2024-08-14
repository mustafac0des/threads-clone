import express from "express";
import {
  user_sign_up,
  user_sign_in,
  user_sign_out,
  userProfile,
  user_update,
  user_follow_unfollow,
} from "../controllers/userController.js";
import protect_route from "../middlewares/protect_route.js";

const router = express.Router();

router.post("/signup", user_sign_up);
router.post("/signin", user_sign_in);
router.post("/signout", user_sign_out);
router.get("/profile/:username", userProfile);
router.put("/update/:id", protect_route, user_update);
router.post("/followUnfollow/:id", protect_route, user_follow_unfollow);

export default router;
