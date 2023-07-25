import { Request, Response } from "express";
import createUserService from "../Services/users/createUsers.service";
import {
  TUserRequest,
  TUserResponse,
  TUsersResponse,
} from "../Interfaces/users.interfaces";
import listAllUsersService from "../Services/users/listUsers.service";
import deleteUserService from "../Services/users/deleteUsers.service";
import listUserByIdService from "../Services/users/listUserById.service";
import updateUserService from "../Services/users/updateUsers.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body;

  const createdUser = await createUserService(userData);

  return res.status(201).json(createdUser);
};

export const listAllUserController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const users: TUsersResponse | null = await listAllUsersService();
  return res.json(users);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  const userDatarequest: TUserRequest = req.body;
  console.log(userDatarequest);

  const updatedUser: string | TUserResponse = await updateUserService(
    userId,
    userDatarequest
  );

  return res.json(updatedUser);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};

export const listUserbyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = parseInt(req.params.id);

  const user: TUserResponse | null = await listUserByIdService(userId);

  return res.json(user);
};
