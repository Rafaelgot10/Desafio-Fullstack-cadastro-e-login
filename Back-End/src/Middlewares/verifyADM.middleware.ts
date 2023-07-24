import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const verifyADM = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const admin: boolean = res.locals.admin;

  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default verifyADM;
