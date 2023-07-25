import { Request, Response } from "express";
import createContactService from "../Services/contact/createContact.service";
import deleteContactService from "../Services/contact/deleteContact.service";
import {
  TContactRequest,
  TContactResponse,
  TContactsResponse,
} from "../Interfaces/contact.interfaces";
import listAllContactsService from "../Services/contact/listContact.service";
import listContactByIdService from "../Services/contact/listContactById.service";
import updateContactService from "../Services/contact/updateContact.service";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData = req.body;

  const createdContact = await createContactService(contactData);

  return res.status(201).json(createdContact);
};

export const listAllContactsController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const contacts: TContactsResponse | null = await listAllContactsService();
  return res.json(contacts);
};

export const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);
  const contactDatarequest: TContactRequest = req.body;
  console.log(contactDatarequest);

  const updatedContact: string | TContactResponse = await updateContactService(
    contactId,
    contactDatarequest
  );

  return res.json(updatedContact);
};

export const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);

  await deleteContactService(contactId);

  return res.status(204).send();
};

export const listContactbyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = parseInt(req.params.id);

  const contact: TContactResponse | null = await listContactByIdService(
    contactId
  );

  return res.json(contact);
};
