import { createContext, useContext, useState } from "react";
import {
  IContactContext,
  IDefaultProviderProps,
  TContact,
  TContactRequest,
  TContactUpdateRequest,
} from "./@Types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import axios from "axios";
import { UserContext } from "../userContext/userContext";

type responseError = {
  message: string;
};

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IDefaultProviderProps) => {
  const [contact, setContact] = useState<TContact>();

  const [createContactModal, setCreateContactModal] = useState(false);

  const [updateContactModal, setUpdateContactModal] = useState(false);

  const [deleteContactModal, setDeleteContactModal] = useState(false);

  const { getUserLoged } = useContext(UserContext);

  let token = localStorage.getItem("KNZ-HUB-Token");

  async function createContact(formData: TContactRequest) {
    try {
      const response = await api.post<TContact>("contact", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Contato ${formData.fullName} cadastrado com sucesso `);
      getUserLoged();
      setCreateContactModal(false);
    } catch (error) {
      if (axios.isAxiosError<responseError>(error)) {
        if (error.response?.data.message == "Phone number already exists") {
          toast.error("Numero de telefone já esta cadastrado em sua conta");
          console.log(error);
        } else if (error.response?.data.message == "Email already exists") {
          toast.error("Email já cadastrado em sua conta");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    }
  }

  async function updateContact(
    id: number | undefined,
    formData: TContactUpdateRequest
  ) {
    try {
      const response = await api.patch<TContact>(`contact/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getUserLoged();
      toast.success(`Contato ${formData.fullName} atualizado com sucesso `);
      setUpdateContactModal(false);
    } catch (error) {
      if (axios.isAxiosError<responseError>(error)) {
        if (error.response?.data.message == "Phone number already exists") {
          toast.error("Numero de telefone já esta cadastrado em sua conta");
          console.log(error);
        } else if (error.response?.data.message == "Email already exists") {
          toast.error("Email já cadastrado em sua conta");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    }
  }

  async function deleteContact(id: number | undefined) {
    try {
      const response = await api.delete(`contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getUserLoged();
      toast.success(`Contato ${contact?.fullName} deletado com sucesso`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ContactContext.Provider
      value={{
        contact,
        setContact,
        createContact,
        createContactModal,
        setCreateContactModal,
        updateContactModal,
        setUpdateContactModal,
        deleteContactModal,
        setDeleteContactModal,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
