import express from "express";
import {
  signup,
  signin,
  signout,
  profile,
  update,
  followUnfollow,
} from "../controllers/userController.js";

import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.get("/profile/:username", profile);
router.post("/update/:id", protectRoute, update);
router.post("/followUnfollow/:id", protectRoute, followUnfollow);

export default router;
