import { createContext, useState } from "react";
import {
  IDefaultProviderProps,
  IUserContext,
  TLoginForm,
  TResponseLogin,
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
} from "./@Types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [updateUserModal, setUpdateUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [password, setPassword] = useState<string>();
  const [user, setUser] = useState<TUserResponse>();

  const navigate = useNavigate();

  let token = localStorage.getItem("KNZ-HUB-Token");

  async function login(formData: TLoginForm) {
    try {
      setLoading(true);
      const response = await api.post<TResponseLogin>("login", formData);
      localStorage.setItem("KNZ-HUB-Token", response.data.token);

      navigate("/dash");
      toast.success(`Bem-vindo de volta !!`);
      setPassword(formData.password);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.status == 401) {
          toast.error("Credenciais incorretas");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("KNZ-HUB-Token");
    setPassword("");
    navigate("/login");
  }

  // Requests

  async function registerUser(formData: TUserRequest) {
    try {
      const response = await api.post<TUserResponse>("users", formData);
      toast.success(`Usuario ${formData.fullName} cadastrado com sucesso `);
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.data == "Email already exists") {
          toast.error("Email já cadastrado, insira outro email");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    }
  }

  async function updateUser(formData: TUserUpdateRequest) {
    try {
      setLoading(true);
      const response = await api.patch<TUserResponse>("profile/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(
        `Usuario ${response.data.fullName} atualizado com sucesso `
      );
      getUserLoged();
      setUpdateUserModal(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id: number | undefined) {
    try {
      setLoading(true);
      const response = await api.delete(`users/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Usuario ${user?.fullName} deletado com sucesso`);
      setDeleteUserModal(false);
      logout();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getUserLoged() {
    try {
      setLoading(true);

      const response = await api.get<TUserResponse>("profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        updateUserModal,
        setUpdateUserModal,
        deleteUserModal,
        setDeleteUserModal,
        password,
        setPassword,
        user,
        setUser,
        logout,
        login,
        registerUser,
        updateUser,
        deleteUser,
        getUserLoged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
