import { z } from "zod";
import { contactSchema } from "./contact.schemas";

export const userSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string().email().max(45),
  phone: z.number(),
  createdAt: z.string(),
});

export const requestUserSchema = userSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    password: z.string().max(120),
  });

export const responseUserSchema = userSchema.extend({
  contacts: z.optional(contactSchema).array(),
});

export const responseUsersSchema = responseUserSchema.array();

export const updateUserSchema = requestUserSchema.partial();
