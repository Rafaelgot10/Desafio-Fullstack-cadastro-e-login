import { Link, useNavigate } from "react-router-dom";
import { StyledLoginForm, StyledLoginPage } from "./style";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { loginSchema } from "../../schemas/users.schemas";
import { UserContext } from "../../providers/userContext/userContext";
import { useForm } from "react-hook-form";
import { TLoginForm } from "../../providers/userContext/@Types";
import { zodResolver } from "@hookform/resolvers/zod";

export function LoginPage() {
  const { login, getUserLoged } = useContext(UserContext);

  const navigate = useNavigate();

  let token = localStorage.getItem("KNZ-Schedule-Token");

  useEffect(() => {
    if (token) {
      navigate("/dash");
      toast.error("Você já esta logado em nosso sistema !!");
      getUserLoged();
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    mode: "onBlur",

    resolver: zodResolver(loginSchema),
  });

  const onSubmitFunction = (data: TLoginForm) => {
    login(data);
  };

  return (
    <StyledLoginPage>
      <h1>Desafio - FullStack</h1>
      <StyledLoginForm onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite seu nome de usuario"
            id="email"
            {...register("email")}
          />
          <span className="error">{errors.email?.message}</span>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite sua Senha"
            id="password"
            {...register("password")}
          />
          <span className="error">{errors.password?.message}</span>
        </div>

        <button type="submit" className="loginButton">
          Entrar
        </button>

        <span>Ainda não possui uma conta?</span>

        <Link to="/register" className="loginButtonCadaste-se">
          Cadastre-se
        </Link>
      </StyledLoginForm>
    </StyledLoginPage>
  );
}
