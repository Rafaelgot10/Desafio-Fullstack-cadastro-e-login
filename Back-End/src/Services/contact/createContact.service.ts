import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../Entities/contacts.entities";
import { contactSchema } from "../../Schemas/contact.schemas";
import {
  TContactRequest,
  TContactResponse,
} from "../../Interfaces/contact.interfaces";
import User from "../../Entities/users.entities";
import { TUser } from "../../Interfaces/users.interfaces";
import { userSchema } from "../../Schemas/users.schemas";

const createContactService = async (
  contactData: TContactRequest,
  userId: number
): Promise<TContactResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const newUser: TUser = userSchema.parse(user);

  const newContactData = {
    ...contactData,
    user: newUser,
  };

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact = contactRepository.create(newContactData);

  await contactRepository.save(contact);

  const returnContact = contactSchema.parse(contact);

  return returnContact;
};

export default createContactService;
