import { useContext } from "react";
import { UserContext } from "../../../providers/userContext/userContext";
import { StyledDeleteUserModal } from "./style";

type IProps = {
  setDeleteUserModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DeleteUserModal({ setDeleteUserModal }: IProps) {
  const { deleteUser, user } = useContext(UserContext);

  return (
    <div className="modal">
      <div className="title">
        <h2>Deletar Conta</h2>
        <span onClick={() => setDeleteUserModal(false)}>X</span>
      </div>

      <StyledDeleteUserModal>
        <h1>Deseja realmente deletar sua conta ?</h1>

        <button type="button" onClick={() => deleteUser(user?.id)}>
          Deletar Conta
        </button>
      </StyledDeleteUserModal>
    </div>
  );
}
