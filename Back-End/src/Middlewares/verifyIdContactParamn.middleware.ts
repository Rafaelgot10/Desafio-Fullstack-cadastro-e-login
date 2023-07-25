import { Repository } from "typeorm";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import Contact from "../Entities/contacts.entities";

const verifyIdContactParamn = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactId = parseInt(req.params.id);

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  res.locals.Contact = contact;
  return next();
};

export default verifyIdContactParamn;
