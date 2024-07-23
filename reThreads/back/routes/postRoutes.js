import express from "express";
import {
  post,
  getPost,
  deletePost,
  likePost,
  replyPost,
  feedPost,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/create", protectRoute, post);
router.get("/feed", protectRoute, feedPost);
router.get("/:id", getPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likePost);
router.post("/:id", protectRoute, replyPost);

export default router;
