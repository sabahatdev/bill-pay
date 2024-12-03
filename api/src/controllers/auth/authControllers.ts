import { Request, Response } from "express";
import {
  createUser,
  getUserByUsername,
  getAllUsers,
} from "../../database/models/authmodel";

export const createUserController = (req: Request, res: Response): any => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const existingUser = getUserByUsername(username);
  if (existingUser) {
    return res.status(400).send("Username is already taken");
  }

  const newUser = createUser(username, password);

  res.status(201).send({
    message: "User created successfully",
    user: {
      id: newUser.id,
      username: newUser.username,
    },
  });
};
export const getAllUsersController = (req: Request, res: Response): any => {
  const users = getAllUsers();
  res.status(200).send({
    message: "Users retrieved successfully",
    users,
  });
};
export const getUserByUsernameController = (
  req: Request,
  res: Response
): any => {
  const { username } = req.params;

  if (!username) {
    return res.status(400).send("Username is required");
  }
  const user = getUserByUsername(username);
  if (!user) {
    return res.status(404).send("User not found");
  }

  res.status(200).send({
    message: "User found successfully",
    user,
  });
};
