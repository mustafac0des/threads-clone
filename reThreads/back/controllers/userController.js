import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import setTokenCookie from "../utils/setTokenCookie.js";
import { v2 as cloudinary } from "cloudinary";

const user_sign_up = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);

    const new_user = new User({
      name,
      username,
      password: hashed_password,
    });

    await new_user.save();

    if (new_user) {
      return res.json({
        status: 200,
        message: "Account created successfully!",
      });
    }
  } catch {
    return res.json({ status: 500, message: "Something went wrong!" });
  }
};

const user_sign_in = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordCorrect) {
      return res.json({
        status: 400,
        message: "The entered username or password is incorrect!",
      });
    }

    setTokenCookie(user._id, res);

    return res.json({
      status: 200,
      message: "Signed in successfully! Redirecting. . .",
      user,
    });
  } catch {
    return res.json({
      status: 500,
      message: "Something went wrong! ",
    });
  }
};

const user_sign_out = async (res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    return res.status(200).json({ message: "User logged out successfully!" });
  } catch {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

const user_update = async (req, res) => {
  const { name, biography, newUsername, password } = req.body;
  let { picture } = req.body;
  const { id } = req.params;
  console.log(id);
  try {
    let user = await User.findById(id);

    if (!user) {
      return res.json({ status: 400, message: "User not found!" });
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }

    if (picture) {
      if (user.picture) {
        const publicId = user.picture.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);
      }

      const upload_response = await cloudinary.uploader.upload(picture, {
        upload_preset: "ml_default",
      });

      user.picture = upload_response.secure_url;
    }

    user.name = name || user.name;
    user.picture = picture || user.picture;
    user.biography = biography || user.biography;
    user.username = newUsername || user.username;
    user.password = password || user.password;

    await user.save();

    if (user) {
      return res.json({
        status: 200,
        message: "Account updated successfully!",
      });
    }
  } catch (err) {
    return res.json({
      status: 500,
      message: `Something went wrong! ${err.message}`,
    });
  }
};

const userProfile = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username })
      .select("-password")
      .select("-updatedAt");

    if (!user) {
      return res.json({ _id: null, status: 400, message: "User not found!" });
    } else {
      return res.json(user);
    }
  } catch {
    res.json({ status: 500, message: "Something went wrong!" });
  }
};

const user_follow_unfollow = async (req, res) => {
  try {
    const { id } = req.params;
    const user_to_modify = await User.findById(id);
    const current_user = await User.findById(req.user._id);

    if (id == current_user) {
      return res.status(400).json({ message: "You cannot follow yourself!" });
    }

    if (!user_to_modify || !current_user) {
      return res.status(400).json({ message: "User not found!" });
    }

    const modify_user_followings = current_user.following.includes(id);

    if (modify_user_followings) {
      await User.findByIdAndUpdate(current_user, { $pull: { following: id } });
      await User.findByIdAndUpdate(id, { $pull: { followers: current_user } });
      res.status(200).json({ message: "User followed successfully! " });
    } else {
      await User.findByIdAndUpdate(current_user, { $push: { following: id } });
      await User.findByIdAndUpdate(id, { $push: { followers: current_user } });
      res.status(200).json({ message: "User unfollowed successfully!" });
    }
  } catch {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export {
  user_sign_up,
  user_sign_in,
  user_sign_out,
  user_update,
  userProfile,
  user_follow_unfollow,
};
