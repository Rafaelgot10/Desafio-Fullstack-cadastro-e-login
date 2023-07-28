import { Repository } from "typeorm";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import Contact from "../Entities/contacts.entities";
import User from "../Entities/users.entities";

const verifyEmailContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const emailName: string = req.body.email;

  if (!emailName) {
    return next();
  }

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const contatos: Contact[] = await contactRepository.find();

  const users: User[] = await userRepository.find();

  const email: Contact | null = await contactRepository.findOne({
    where: {
      email: emailName,
    },
  });

  console.log(users);

  if (email) {
    throw new AppError("Email already exists", 409);
  } else {
    return next();
  }
};

export default verifyEmailContact;
