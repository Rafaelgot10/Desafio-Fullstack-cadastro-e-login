import { Link } from "react-router-dom";
import { StyledNotFoundPage } from "./style";

export function NotFound() {
  return (
    <StyledNotFoundPage>
      <h1>404</h1>
      <span>Oooops, página não encontrada</span>
      <p>Desculpe mas a página requisitada não foi encontrada </p>
      <Link to="/login">Login</Link>
    </StyledNotFoundPage>
  );
}
