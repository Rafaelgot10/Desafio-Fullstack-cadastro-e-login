import { zodResolver } from "@hookform/resolvers/zod";
import { StyledUpdateContactForm } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ContactContext } from "../../../providers/contactContext/contactContext";
import { requestContactSchema } from "../../../schemas/contact.schemas";
import { TContactUpdateRequest } from "../../../providers/contactContext/@Types";

type IProps = {
  setUpdateContactModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function UpdateContactModal({ setUpdateContactModal }: IProps) {
  const { updateContact, contact } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactUpdateRequest>({
    defaultValues: {
      email: contact?.email,
      fullName: contact?.fullName,
      phone: contact?.phone,
    },
    mode: "onBlur",
    resolver: zodResolver(requestContactSchema),
  });

  const onSubmitFunction = (data: TContactUpdateRequest) => {
    if (data.email == contact?.email) {
      delete data.email;
    }

    if (data.phone == contact?.phone) {
      delete data.phone;
    }

    updateContact(contact?.id, data);
  };

  return (
    <div className="modal">
      <div className="title">
        <h2>Atualizar Contato</h2>
        <span onClick={() => setUpdateContactModal(false)}>X</span>
      </div>

      <StyledUpdateContactForm onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            placeholder="Nome do Contato"
            {...register("fullName")}
          />
          <span className="error">{errors.fullName?.message}</span>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email do Contato"
            {...register("email")}
          />
          <span className="error">{errors.email?.message}</span>
        </div>

        <div>
          <label htmlFor="phone">Telefone</label>
          <input
            type="text"
            id="phone"
            placeholder="Telefone do Contato"
            {...register("phone")}
          />
          <span className="error">{errors.phone?.message}</span>
        </div>

        <button type="submit">Atualizar Contato</button>
      </StyledUpdateContactForm>
    </div>
  );
}
