import { z } from "zod";
import {
  contactSchema,
  requestContactSchema,
  responseContactsSchema,
  updateContactSchema,
} from "../../schemas/contact.schemas";

export type IDefaultProviderProps = {
  children: React.ReactNode;
};

export type TContact = z.infer<typeof contactSchema>;

export type TContactRequest = z.infer<typeof requestContactSchema>;

export type TContactUpdateRequest = z.infer<typeof updateContactSchema>;

export type TContactResponse = z.infer<typeof responseContactsSchema>;

export type IContactContext = {
  contact: TContact | undefined;
  setContact: React.Dispatch<React.SetStateAction<TContact | undefined>>;
  createContactModal: boolean;
  setCreateContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateContactModal: boolean;
  setUpdateContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteContactModal: boolean;
  setDeleteContactModal: React.Dispatch<React.SetStateAction<boolean>>;

  createContact: (formData: TContactRequest) => Promise<void>;
  updateContact: (
    id: number | undefined,
    formData: TContactUpdateRequest
  ) => Promise<void>;
  deleteContact: (id: number | undefined) => Promise<void>;
};
