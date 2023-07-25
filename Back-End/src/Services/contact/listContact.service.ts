import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../Entities/contacts.entities";
import { TContactsResponse } from "../../Interfaces/contact.interfaces";
import { responseContactsSchema } from "../../Schemas/contact.schemas";

const listAllContactsService = async (): Promise<TContactsResponse | null> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contacts: Contact[] | null = await contactRepository.find();

  const returnContacts: TContactsResponse =
    responseContactsSchema.parse(contacts);

  return returnContacts;
};

export default listAllContactsService;
