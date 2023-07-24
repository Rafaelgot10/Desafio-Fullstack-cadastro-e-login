import { z } from "zod";
import {
  requestUserSchema,
  responseUserSchema,
  responseUsersSchema,
  updateUserSchema,
  userSchema,
} from "../Schemas/users.schemas";

export type TUser = z.infer<typeof userSchema>;

export type TUserResponse = z.infer<typeof responseUserSchema>;

export type TUsersResponse = z.infer<typeof responseUsersSchema>;

export type TUserRequest = z.infer<typeof requestUserSchema>;

export type TUserUpdateRequest = z.infer<typeof updateUserSchema>;
