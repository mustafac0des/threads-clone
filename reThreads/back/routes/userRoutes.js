import express from "express";
import {
  userSignUp,
  userSignIn,
  userSignOut,
  userProfile,
  userUpdate,
  userFollowUnfollow,
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);
router.post("/signout", userSignOut);
router.get("/profile/:username", userProfile);
router.put("/update/:id", protectRoute, userUpdate);
router.put("/followUnfollow/:id", protectRoute, userFollowUnfollow);

export default router;
