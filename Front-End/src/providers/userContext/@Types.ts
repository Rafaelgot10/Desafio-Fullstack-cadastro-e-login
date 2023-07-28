import { z } from "zod";
import {
  loginSchema,
  requestUserSchema,
  responseUserSchema,
  responseUsersSchema,
  responseloginSchema,
  updateUserSchema,
  userSchema,
} from "../../schemas/users.schemas";

export type IDefaultProviderProps = {
  children: React.ReactNode;
};

export type TUser = z.infer<typeof userSchema>;

export type TUserRequest = z.infer<typeof requestUserSchema>;

export type TUserUpdateRequest = z.infer<typeof updateUserSchema>;

export type TUsersResponse = z.infer<typeof responseUsersSchema>;

export type TUserResponse = z.infer<typeof responseUserSchema>;

export type TLoginForm = z.infer<typeof loginSchema>;

export type TResponseLogin = z.infer<typeof responseloginSchema>;

export type IUserContext = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  updateUserModal: boolean;
  setUpdateUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUserModal: boolean;
  setDeleteUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  password: string | undefined;
  setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  user: TUserResponse | undefined;
  setUser: React.Dispatch<React.SetStateAction<TUserResponse | undefined>>;
  login: (formData: TLoginForm) => Promise<void>;
  logout: () => void;

  registerUser: (formData: TUserRequest) => Promise<void>;
  updateUser: (formData: TUserUpdateRequest) => Promise<void>;
  deleteUser: (id: number | undefined) => Promise<void>;
  getUserLoged: () => Promise<void>;
};
