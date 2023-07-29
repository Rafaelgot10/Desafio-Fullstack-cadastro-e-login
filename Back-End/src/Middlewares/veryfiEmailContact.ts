import { Repository } from "typeorm";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import User from "../Entities/users.entities";

const verifyEmailContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const emailName: string = req.body.email;

  const userId: number = res.locals.sub;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },

    relations: {
      contacts: true,
    },
  });

  user?.contacts?.map((contact) => {
    if (emailName == contact.email) {
      throw new AppError("Email already exists", 409);
    }
  });

  return next();
};

export default verifyEmailContact;
