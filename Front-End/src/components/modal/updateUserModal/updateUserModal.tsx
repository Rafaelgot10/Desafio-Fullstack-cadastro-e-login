import { useContext, useState } from "react";
import { UserContext } from "../../../providers/userContext/userContext";
import { useForm } from "react-hook-form";
import { TUserUpdateRequest } from "../../../providers/userContext/@Types";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestUserSchema } from "../../../schemas/users.schemas";
import { StyledUpdateUserForm } from "./style";

type IProps = {
  setUpdateUserModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function UpdateUserModal({ setUpdateUserModal }: IProps) {
  const { user, updateUser, password } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserUpdateRequest>({
    defaultValues: {
      email: user?.email,
      fullName: user?.fullName,
      phone: user?.phone,
      password: password,
    },
    mode: "onBlur",
    resolver: zodResolver(requestUserSchema),
  });

  const onSubmitFunction = (data: TUserUpdateRequest) => {
    if (data.email == user?.email) {
      delete data.email;
    }

    if (data.phone == user?.phone) {
      delete data.phone;
    }

    if (!showPassword) {
      delete data.password;
    }
    console.log(data);

    updateUser(data);
  };

  return (
    <div className="modal">
      <div className="title">
        <h2>Atualizar Usuario</h2>
        <span onClick={() => setUpdateUserModal(false)}>X</span>
      </div>

      <StyledUpdateUserForm onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            placeholder="Novo Nome..."
            {...register("fullName")}
          />
          <span className="error">{errors.fullName?.message}</span>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Novo Email..."
            {...register("email")}
          />
          <span className="error">{errors.email?.message}</span>
        </div>

        <button
          type="button"
          className="showsenha"
          onClick={() => setShowPassword(!showPassword)}
        >
          Senha
        </button>

        {showPassword ? (
          <div>
            <label htmlFor="email">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Nova Senha..."
              {...register("password")}
            />
            <span className="error">{errors.email?.message}</span>
          </div>
        ) : null}

        <div>
          <label htmlFor="phone">Telefone</label>
          <input
            type="text"
            id="phone"
            placeholder="Novo Telefone..."
            {...register("phone")}
          />
          <span className="error">{errors.phone?.message}</span>
        </div>

        <button className="updateButton" type="submit">
          Atualizar Usuario
        </button>
      </StyledUpdateUserForm>
    </div>
  );
}
