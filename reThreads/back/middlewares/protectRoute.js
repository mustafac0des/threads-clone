import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log(token);
    if (!token) {
      throw new Error("Unauthorized!");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id).select("-password");
    req.user = user;

    next();
  } catch (err) {
    res.json({ status: 500, message: err.message });
  }
};

export default protectRoute;
