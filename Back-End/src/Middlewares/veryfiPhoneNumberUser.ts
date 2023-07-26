import { Repository } from "typeorm";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import User from "../Entities/users.entities";

const verifyPhoneNumberUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const phoneNumber: number = req.body.phone;

  if (!phoneNumber) {
    return next();
  }

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const phone: User | null = await userRepository.findOne({
    where: {
      phone: phoneNumber,
    },
  });

  console.log("body:", phoneNumber);
  console.log("encontrado:", phone);

  if (phone) {
    throw new AppError("Phone number already exists", 409);
  } else {
    return next();
  }
};

export default verifyPhoneNumberUser;
