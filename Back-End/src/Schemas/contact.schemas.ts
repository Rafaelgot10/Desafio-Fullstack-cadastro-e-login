import { z } from "zod";

export const contactSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string().email().max(45),
  phone: z.number(),
  createdAt: z.string(),
});

export const requestContactSchema = contactSchema.omit({
  id: true,
  createdAt: true,
});

export const responseContactsSchema = contactSchema.array();

export const updateContactSchema = requestContactSchema.partial();
