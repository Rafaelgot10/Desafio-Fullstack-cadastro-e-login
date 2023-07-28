import { zodResolver } from "@hookform/resolvers/zod";
import { StyledCreateContactForm } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ContactContext } from "../../../providers/contactContext/contactContext";
import { requestContactSchema } from "../../../schemas/contact.schemas";
import { TContactRequest } from "../../../providers/contactContext/@Types";

type IProps = {
  setCreateContactModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CreateContactModal({ setCreateContactModal }: IProps) {
  const { createContact } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactRequest>({
    mode: "onBlur",
    resolver: zodResolver(requestContactSchema),
  });

  const onSubmitFunction = (data: TContactRequest) => {
    createContact(data);
  };

  return (
    <div className="modal">
      <div className="title">
        <h2>Cadastrar Contato</h2>
        <span onClick={() => setCreateContactModal(false)}>X</span>
      </div>

      <StyledCreateContactForm onSubmit={handleSubmit(onSubmitFunction)}>
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

        <button type="submit">Cadastrar Contato</button>
      </StyledCreateContactForm>
    </div>
  );
}
