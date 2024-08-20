import User from "../models/userModel.js";
import Post from "../models/postModel.js";
import { v2 as cloudinary } from "cloudinary";

const postCreate = async (req, res) => {
  const posterId = req.user._id;

  const { text } = req.body;
  let { picture } = req.body;
  let pictureUrl;

  try {
    const user = await User.findById(posterId);

    if (!user) {
      throw new Error("User not found!");
    }

    if (user._id.toString() !== req.params.id.toString()) {
      throw new Error("Unauthorized!");
    }

    if (picture) {
      const uploadResponse = await cloudinary.uploader.upload(picture, {
        upload_preset: "ml_default",
      });

      pictureUrl = uploadResponse.secure_url;
    }

    const newPost = new Post({ postedBy: posterId, text, image: pictureUrl });

    await newPost.save();

    return res.json({ status: 200, message: "Posted!" });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const postGet = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new Error("Post not found!");
    }

    const user = await User.findById(post.postedBy);

    if (!user) {
      throw new Error("User not found!");
    }

    const userReplyIds = [
      ...new Set(post.replies.map((reply) => reply.userId.toString())),
    ];

    const userData = await User.find({ _id: { $in: userReplyIds } }).select(
      "username name picture",
    );

    const userMap = new Map(
      userData.map((user) => [user._id.toString(), user]),
    );
    const postData = {
      ...post.toObject(),
      postedBy: {
        _id: user._id,
        username: user.username,
        name: user.name,
        picture: user.picture,
      },
      replies: post.replies.map((reply) => ({
        ...reply.toObject(),
        userId: userMap.get(reply.userId.toString()) || {},
      })),
    };

    return res.json(postData);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const postFeed = async (req, res) => {
  const user = await User.findById(req.params.id);

  try {
    if (!user) {
      throw new Error("User not found!");
    }

    if (req.user._id.toString() !== user._id.toString()) {
      throw new Error("Unauthorized!");
    }

    const postData = await Post.find();

    const users = [
      ...new Set(postData.map((post) => post.postedBy.toString())),
    ];

    const userData = await User.find({ _id: { $in: users } }).select(
      "username name picture",
    );

    const userMap = new Map(
      userData.map((user) => [user._id.toString(), user]),
    );

    const posts = postData.map((post) => ({
      ...post.toObject(),
      postedBy: userMap.get(post.postedBy.toString()) || {},
    }));

    return res.json(posts);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const postLike = async (req, res) => {
  try {
    const postId = await Post.findById(req.params.id);
    const userId = req.user._id;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post not found!");
    }

    const likedPost = post.likes.includes(userId);

    if (likedPost) {
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      return res.json({ status: 200, message: "Post unliked!" });
    } else {
      await Post.updateOne({ _id: postId }, { $push: { likes: userId } });
      await post.save();
      return res.json({ status: 200, message: "Post liked!" });
    }
  } catch (err) {
    return res.json({ message: err.message });
  }
};

const postReply = async (req, res) => {
  try {
    const userId = req.user._id;
    const postId = await Post.findById(req.params.id);

    const { text } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post not found!");
    }

    await Post.updateOne(
      { _id: postId },
      { $push: { replies: [{ userId, text }] } },
    );

    await post.save();

    return res.json({ status: 200, message: "Post replied!" });
  } catch (err) {
    return res.json({ message: err.message });
  }
};

const postDelete = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new Error("Post not found!");
    }

    if (req.user._id.toString() !== post.postedBy.toString()) {
      throw new Error("Unauthorized!");
    }

    if (post.image) {
      await cloudinary.uploader.destroy(
        post.image.split("/").pop().split(".")[0],
      );
    }

    await Post.findByIdAndDelete(req.params.id);

    return res.json({ status: 200, message: "Post deleted!" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const postRepost = async (req, res) => {
  const postId = req.params.id;

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      throw new Error("User not found!");
    }

    await Post.updateOne({ _id: postId }, { $push: { repostedBy: user._id } });

    return res.json({ status: 200, message: "Reposted!" });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

export {
  postCreate,
  postGet,
  postFeed,
  postLike,
  postReply,
  postDelete,
  postRepost,
};
