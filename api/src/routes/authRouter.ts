import express from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByUsernameController,
} from "../controllers/auth/authControllers";

const router = express.Router();
router.post("/createUser", createUserController);
router.get("/getAllUsers", getAllUsersController);
router.get("/getUserByUsername/:username", getUserByUsernameController);

export default router;
