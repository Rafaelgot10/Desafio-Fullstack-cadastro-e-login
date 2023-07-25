import { z } from "zod";
import {
  requestContactSchema,
  contactSchema,
  responseContactsSchema,
  updateContactSchema,
} from "../Schemas/contact.schemas";

export type TContact = z.infer<typeof contactSchema>;

export type TContactResponse = z.infer<typeof contactSchema>;

export type TContactsResponse = z.infer<typeof responseContactsSchema>;

export type TContactRequest = z.infer<typeof requestContactSchema>;

// export type TContactFull = z.infer<typeof contactSchema>;

export type TContactUpdateRequest = z.infer<typeof updateContactSchema>;
