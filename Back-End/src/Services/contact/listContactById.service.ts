import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../Entities/contacts.entities";
import { TContactResponse } from "../../Interfaces/contact.interfaces";
import { contactSchema } from "../../Schemas/contact.schemas";

const listContactByIdService = async (
  contactId: number
): Promise<TContactResponse | null> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },

    relations: {
      user: true,
    },
  });

  const returnContact: TContactResponse = contactSchema.parse(contact);

  return returnContact;
};

export default listContactByIdService;
