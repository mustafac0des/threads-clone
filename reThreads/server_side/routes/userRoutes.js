import express from "express";
import signUpUser from "../controllers/userController.js";

const router = express.Router();

function okayconsolethis() {
  console.log("heya!");
}

okayconsolethis();

router.post("/signup", signUpUser);

export default router;
