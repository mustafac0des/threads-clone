import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    if (newUser) {
      return res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        username: newUser.username,
      });
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid!" });
    }

    setTokenCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      username: user.username,
    });
  } catch (err) {
    console.error("Error in sign up user:", err);
    res.status(500).json({ message: err.message });
  }
};

const signout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "Logged out!" });
  } catch (err) {
    console.error("Error in sign up user:", err);
    res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  const { name, email, username, password, profilePic, biography } = req.body;
  const userId = req.user._id;

  try {
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.username = username || user.username;
    user.profilePic = profilePic || user.profilePic;
    user.biography = biography || user.biography;

    user = await user.save();
    res.status(200).json({ message: "Profile updated successfully => ", user });
  } catch (err) {
    console.error("Error in updating profile", err);
    res.status(500).json({ message: err.message });
  }
};

const profile = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username })
      .select("-password")
      .select("-updatedAt");

    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    res.status(200).json({ message: "Profile => ", user });
  } catch (err) {
    console.error("Error in viewing profile", err);
    res.status(500).json({ message: err.message });
  }
};

const followUnfollow = async (req, res) => {
  try {
    const { id } = req.params;
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);

    if (id == req.user._id) {
      return res.status(400).json({ message: "You cannot follow yourself" });
    }

    if (!userToModify || !currentUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const modifyFollowings = currentUser.following.includes(id);

    if (modifyFollowings) {
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      res.status(200).json({ message: "User followed successfully! " });
    } else {
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      res.status(200).json({ message: "User un-followed successfully!" });
    }
  } catch (err) {
    console.error("Error in follow/unfollow:", err);
    res.status(500).json({ message: err.message });
  }
};

export { signup, signin, signout, update, profile, followUnfollow };
