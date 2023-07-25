import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../Entities/contacts.entities";
import {
  TContactRequest,
  TContactResponse,
} from "../../Interfaces/contact.interfaces";
import { responseContactSchema } from "../../Schemas/contact.schemas";

const updateContactService = async (
  contactId: number,
  contactData: TContactRequest
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContactData: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  const newContactData = contactRepository.create({
    ...oldContactData,
    ...contactData,
  });

  await contactRepository.save(newContactData);

  const returnContact: TContactResponse =
    responseContactSchema.parse(newContactData);

  return returnContact;
};

export default updateContactService;
