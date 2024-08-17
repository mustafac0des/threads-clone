import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      maxValue: 512,
    },
    image: {
      type: String,
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    replies: {
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
      text: {
        type: String,
      },
      picture: {
        type: String,
      },
      username: {
        type: String,
      },
    },
    repostedBy: {
      type: [mongoose.Schema.ObjectId],
      ref: "User",
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model("Post", postSchema);

export default Post;
