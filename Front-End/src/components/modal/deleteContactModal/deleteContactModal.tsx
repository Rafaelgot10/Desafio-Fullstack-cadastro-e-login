import { useContext } from "react";
import { StyledDeleteContactModal } from "./style";
import { ContactContext } from "../../../providers/contactContext/contactContext";

type IProps = {
  setDeleteContactModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DeleteContactModal({ setDeleteContactModal }: IProps) {
  const { contact, deleteContact } = useContext(ContactContext);

  function handleDeleteContact() {
    deleteContact(contact?.id);
    setDeleteContactModal(false);
  }

  return (
    <div className="modal">
      <div className="title">
        <h2>Deletar Contato</h2>
        <span onClick={() => setDeleteContactModal(false)}>X</span>
      </div>

      <StyledDeleteContactModal>
        <h1>Deseja realmente deletar o contato {contact?.fullName} ?</h1>

        <button type="button" onClick={() => handleDeleteContact()}>
          Deletar Contato
        </button>
      </StyledDeleteContactModal>
    </div>
  );
}
