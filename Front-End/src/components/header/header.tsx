import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserContext } from "../../providers/userContext/userContext";

export function Header() {
  const [nav, setNav] = useState(false);
  const { logout, setUpdateUserModal, setDeleteUserModal } =
    useContext(UserContext);

  function handleUpdateUser() {
    setUpdateUserModal(true);
    setNav(false);
  }

  function handleDeleteUser() {
    setDeleteUserModal(true);
    setNav(false);
  }

  return (
    <StyledHeader nav={nav}>
      <div className="navUp">
        <div>
          <h1>Desafio - FullStack</h1>
        </div>

        <ul className="navUp__ul">
          <li>
            <button onClick={() => handleDeleteUser()}>Deletar Conta</button>
          </li>

          <li>
            <button onClick={() => handleUpdateUser()}> Editar Perfil </button>
          </li>
          <li>
            <button onClick={() => logout()}> Sair </button>
          </li>
        </ul>

        <GiHamburgerMenu className="menuIcon" onClick={() => setNav(!nav)} />
      </div>

      <div className="navDown">
        <ul>
          <li>
            <button onClick={() => handleDeleteUser()}>Deletar Conta</button>
          </li>

          <li>
            <button onClick={() => handleUpdateUser()}> Editar Perfil </button>
          </li>
          <li>
            <button onClick={() => logout()}> Sair </button>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
}
