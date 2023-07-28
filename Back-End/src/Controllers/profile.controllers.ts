import { Request, Response } from "express";
import { TUser, TUserRequest } from "../Interfaces/users.interfaces";
import listUserByIdService from "../Services/users/listUserById.service";
import deleteUserService from "../Services/users/deleteUsers.service";
import updateUserService from "../Services/users/updateUsers.service";

export const listProfilebyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = res.locals.sub;

  const user: TUser | null = await listUserByIdService(userId);

  return res.json(user);
};

export const updateProfileController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = res.locals.sub;
  const userDatarequest: TUserRequest = req.body;

  const updatedUser: string | TUser = await updateUserService(
    userId,
    userDatarequest
  );

  return res.json(updatedUser);
};

export const deleteProfileController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = res.locals.sub;

  await deleteUserService(userId);

  return res.status(204).send();
};
