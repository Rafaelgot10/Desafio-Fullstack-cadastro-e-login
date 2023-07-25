import { z } from "zod";
import {
  requestContactSchema,
  responseContactSchema,
  responseContactsSchema,
  updateContactSchema,
  contactSchema,
} from "../Schemas/contact.schemas";

export type TContact = z.infer<typeof contactSchema>;

export type TContactResponse = z.infer<typeof responseContactSchema>;

export type TContactsResponse = z.infer<typeof responseContactsSchema>;

export type TContactRequest = z.infer<typeof requestContactSchema>;

export type TContactUpdateRequest = z.infer<typeof updateContactSchema>;
