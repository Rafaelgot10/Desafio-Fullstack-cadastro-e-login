import { Link } from "react-router-dom";
import { StyledRegisterForm, StyledRegisterPage } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { useForm } from "react-hook-form";
import { TUserRequest } from "../../providers/userContext/@Types";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestUserSchema } from "../../schemas/users.schemas";

export function RegisterPage() {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserRequest>({
    mode: "onBlur",
    resolver: zodResolver(requestUserSchema),
  });

  const onSubmitFunction = (data: TUserRequest) => {
    registerUser(data);
  };

  return (
    <StyledRegisterPage>
      <div>
        <h1>Desafio - FullStack</h1>
        <Link to="/login">Voltar</Link>
      </div>

      <StyledRegisterForm onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <span>Rapido e grátis, vamos nessa</span>

        <div>
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            placeholder="Digite seu Nome"
            {...register("fullName")}
          />
          <span className="error">{errors.fullName?.message}</span>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu Email"
            {...register("email")}
          />
          <span className="error">{errors.email?.message}</span>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua Senha"
            {...register("password")}
          />
          <span className="error">{errors.password?.message}</span>
        </div>

        <div>
          <label htmlFor="phone">Contato</label>
          <input
            type="text"
            id="phone"
            placeholder="Opções de contato"
            {...register("phone")}
          />
          <span className="error">{errors.phone?.message}</span>
        </div>

        <button type="submit" className="cadastrar">
          Cadastrar
        </button>
      </StyledRegisterForm>
    </StyledRegisterPage>
  );
}
