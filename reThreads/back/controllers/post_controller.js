import User from "../models/userModel.js";
import Post from "../models/postModel.js";

const post_create = async (req, res) => {
  const { postedBy, text, img } = req.body;

  try {
    if (!postedBy || !text) {
      return res.status(400).json({ message: "Fields are required!" });
    }

    const user = await User.findById(postedBy);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user._id.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ message: "Don't disguise as someone else!" });
    }

    if (text.length > 500) {
      return res
        .status(400)
        .json({ message: "Text must be less than 500 characters!" });
    }

    const newPost = new Post({ postedBy, text, img });

    await newPost.save();
    res.status(500).json({ message: "Posted!", newPost });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const post_get = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    res.status(200).json({ message: "Profile => ", post });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const post_feed = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const following = user.following;

    const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({
      createdAt: -1,
    });

    res.status(200).json(feedPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const post_delete = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    if (post.postedBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Unauthorized to delete post!" });
    }
    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "This Post deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const post_like = async (req, res) => {
  try {
    const postId = await Post.findById(req.params.id);
    const userId = req.user._id;

    const post = await Post.findById(postId);

    if (!post) {
      return res
        .status(404)
        .json({ message: `Post not found!, ${postId} ${userId}` });
    }

    const likedPost = post.likes.includes(userId);

    if (likedPost) {
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      return res.status(200).json({ message: "Post unliked" });
    } else {
      await Post.updateOne({ _id: postId }, { $push: { likes: userId } });
      await post.save();
      return res.status(200).json({ message: "Post liked" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const post_reply = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = await Post.findById(req.params.id);
    const userId = req.user._id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    await Post.updateOne(
      { _id: postId },
      { $push: { replies: { userId, text } } },
    );
    await post.save();

    return res.status(200).json({ message: "Post replied!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { post_create, post_get, post_feed, post_like, post_reply, post_delete };
