import express from "express";
import {
  postCreate,
  postGet,
  postFeed,
  postLike,
  postReply,
  postDelete,
  postRepost,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/create/:id", protectRoute, postCreate);
router.get("/:id", postGet);
router.get("/feed/:id", protectRoute, postFeed);
router.put("/like/:id", protectRoute, postLike);
router.put("/reply/:id", protectRoute, postReply);
router.delete("/:id", protectRoute, postDelete);
router.put("/:id", protectRoute, postRepost);

export default router;
