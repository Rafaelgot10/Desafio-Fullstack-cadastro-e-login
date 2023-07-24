import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string().email().max(45),
  password: z.string().max(120),
  phone: z.number(),
  createdAt: z.string(),
});

export const requestUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

export const responseUserSchema = userSchema.omit({ password: true });

export const responseUsersSchema = responseUserSchema.array();

export const updateUserSchema = requestUserSchema.partial();
