import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    picture: {
      type: String,
      default: null,
    },

    name: {
      type: String,
      required: true,
    },

    biography: {
      type: String,
      default: "Hey there! I'm using Threads!",
      maxLength: 256,
    },

    followers: {
      type: [String],
      default: [],
    },

    following: {
      type: [String],
      default: [],
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
