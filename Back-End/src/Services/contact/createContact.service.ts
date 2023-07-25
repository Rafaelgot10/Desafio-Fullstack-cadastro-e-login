import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../Entities/contacts.entities";
import { responseContactSchema } from "../../Schemas/contact.schemas";
import {
  TContactRequest,
  TContactResponse,
} from "../../Interfaces/contact.interfaces";

const createContactService = async (
  contactData: TContactRequest
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact = contactRepository.create(contactData);

  await contactRepository.save(contact);

  const returnContact = responseContactSchema.parse(contact);

  return returnContact;
};

export default createContactService;
