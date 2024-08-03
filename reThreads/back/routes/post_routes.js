import express from "express";
import {
  post_create,
  post_get,
  post_feed,
  post_like,
  post_reply,
  post_delete,
} from "../controllers/post_controller.js";
import protect_route from "../middlewares/protect_route.js";

const router = express.Router();

router.post("/create", protect_route, post_create);
router.get("/:id", post_get);
router.get("/feed", protect_route, post_feed);
router.post("/like/:id", protect_route, post_like);
router.post("/:id", protect_route, post_reply);
router.delete("/:id", protect_route, post_delete);

export default router;
