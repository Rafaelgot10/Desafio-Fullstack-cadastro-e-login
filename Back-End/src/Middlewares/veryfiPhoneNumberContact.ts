import { Repository } from "typeorm";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import Contact from "../Entities/contacts.entities";

const verifyPhoneNumberContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const phoneNumber: number = req.body.phone;

  if (!phoneNumber) {
    return next();
  }

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const phone: Contact | null = await contactRepository.findOne({
    where: {
      phone: phoneNumber,
    },
  });

  if (phone) {
    throw new AppError("Phone number already exists", 409);
  } else {
    return next();
  }
};

export default verifyPhoneNumberContact;
