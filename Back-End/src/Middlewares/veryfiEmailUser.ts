import { Repository } from "typeorm";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import User from "../Entities/users.entities";

const verifyEmailUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const emailName: string = req.body.email;

  if (!emailName) {
    return next();
  }

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const email: User | null = await userRepository.findOne({
    where: {
      email: emailName,
    },
  });

  console.log("body:", emailName);
  console.log("encontrado:", email);

  if (email) {
    throw new AppError("Email already exists", 409);
  } else {
    return next();
  }
};

export default verifyEmailUser;
