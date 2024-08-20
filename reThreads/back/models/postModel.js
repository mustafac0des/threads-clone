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
      type: [
        {
          userId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },
          text: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
    repostedBy: {
      type: [mongoose.Schema.ObjectId],
      ref: "User",
      default: [],
    },
    savedBy: {
      type: [mongoose.Schema.Types.ObjectId],
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
