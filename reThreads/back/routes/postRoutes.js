import express from "express";
import {
  postCreate,
  postGet,
  postFeed,
  postLike,
  postReply,
  postDelete,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/create/:id", protectRoute, postCreate);
router.get("/:id", postGet);
router.get("/feed/:id", protectRoute, postFeed);
router.post("/like/:id", protectRoute, postLike);
router.post("/:id", protectRoute, postReply);
router.delete("/:id", protectRoute, postDelete);

export default router;
