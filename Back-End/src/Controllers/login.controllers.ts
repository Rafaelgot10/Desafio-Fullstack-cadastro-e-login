import { Request, Response } from "express";
import { TLoginResponse } from "../Interfaces/login.interfaces";
import { resquestLoginSchema } from "../Schemas/login.schemas";
import createSessionService from "../Services/login/createSession.service";

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = resquestLoginSchema.parse(req.body);

  const token: TLoginResponse = await createSessionService(userData);
  return res.status(200).json(token);
};

export default loginController;
