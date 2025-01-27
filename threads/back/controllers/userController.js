import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import setTokenCookie from "../utils/setTokenCookie.js";
import { v2 as cloudinary } from "cloudinary";

const userSignUp = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      throw new Error("Username already taken!");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    setTokenCookie(User.findOne({ username })._id, res);

    if (newUser) {
      return res.json({
        newUser,
        status: 200,
        message: "Account created successfully!",
      });
    }
  } catch (err) {
    return res.json({ message: err.message });
  }
};

const userSignIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordCorrect) {
      throw new Error("The entered username or password is incorrect!");
    }

    setTokenCookie(user._id, res);

    return res.json({
      status: 200,
      message: "Signed in successfully! Redirecting...",
      user,
    });
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
};

const userSignOut = async (res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    return res.json({ status: 200, message: "User signed out successfully!" });
  } catch (err) {
    return res.json({ message: err.message });
  }
};

const userUpdate = async (req, res) => {
  const userId = req.params.id;
  const { name, biography, username, password } = req.body;
  let { picture } = req.body;
  let pictureUrl;

  try {
    let user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found!");
    }

    if (user._id.toString() !== req.user._id.toString()) {
      throw new Error("Unauthorized");
    }

    if (username !== req.user.username) {
      const findExistingUsername = await User.find(username);

      if (findExistingUsername) {
        throw new Error("Username already taken!");
      }
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }

    if (picture) {
      if (user.picture) {
        await cloudinary.uploader.destroy(
          user.picture.split("/").pop().split(".")[0],
        );
      }

      const uploadResponse = await cloudinary.uploader.upload(picture, {
        upload_preset: "ml_default",
      });

      pictureUrl = uploadResponse.secure_url;
    }

    user.name = name || user.name;
    user.picture = pictureUrl || user.picture;
    user.biography = biography || user.biography;
    user.username = username || user.username;
    user.password = password || user.password;

    await user.save();

    if (user) {
      return res.json({
        user,
        status: 200,
        message: "Account updated successfully!",
      });
    }
  } catch (err) {
    return res.json({
      message: err.message,
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
      throw new Error("Something went wrong!");
    } else {
      return res.json(user);
    }
  } catch (err) {
    return res.json({ message: err.message });
  }
};

const userFollowUnfollow = async (req, res) => {
  try {
    const otherUser = req.params.id;
    const user = await User.findById(req.user._id);
    const userToModify = await User.findById(otherUser);

    if (user._id === otherUser) {
      throw new Error("You cannot follow yourself!");
    }

    if (!user || !userToModify) {
      throw new Error("User not found!");
    }

    const modifyUserFollowings = user.following.includes(otherUser);

    if (modifyUserFollowings) {
      await User.findByIdAndUpdate(user, {
        $pull: { following: otherUser },
      });
      await User.findByIdAndUpdate(otherUser, {
        $pull: { followers: user._id },
      });

      return res.json({ user, status: 200, message: "User unfollowed!" });
    } else {
      await User.findByIdAndUpdate(user, {
        $push: { following: otherUser },
      });
      await User.findByIdAndUpdate(otherUser, {
        $push: { followers: user._id },
      });

      return res.json({ user, status: 200, message: "User followed!" });
    }
  } catch (err) {
    return res.json({ message: err.message });
  }
};

export {
  userSignUp,
  userSignIn,
  userSignOut,
  userUpdate,
  userProfile,
  userFollowUnfollow,
};
