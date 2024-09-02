import express from "express";
import {
  postCreate,
  postGet,
  postFeed,
  postLike,
  postReply,
  postDelete,
  postRepost,
  postSave,
  postedByUser,
  postReplyLike,
  postReplyDelete,
  postRepliesByUser,
  postRepostedByUser,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/create/:id", protectRoute, postCreate);
router.get("/:id", postGet);
router.get("/postedby/:id", protectRoute, postedByUser);
router.get("/feed/:id", protectRoute, postFeed);
router.put("/like/:id", protectRoute, postLike);
router.put("/reply/:id", protectRoute, postReply);
router.put("/replylike/:id/:id2", protectRoute, postReplyLike);
router.get("/repliesuser/:id", protectRoute, postRepliesByUser);
router.get("/repostsuser/:id", protectRoute, postRepostedByUser);
router.delete("/replydelete/:id/:id2", protectRoute, postReplyDelete);
router.put("/save/:id", protectRoute, postSave);
router.delete("/:id", protectRoute, postDelete);
router.put("/:id", protectRoute, postRepost);

export default router;
