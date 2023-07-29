import { useContext, useEffect } from "react";
import { StyledDash } from "./style";
import { UserContext } from "../../providers/userContext/userContext";
import { useNavigate } from "react-router-dom";
import { SiAddthis } from "react-icons/si";
import { toast } from "react-toastify";
import { Header } from "../../components/header/header";
import { ContactContext } from "../../providers/contactContext/contactContext";
import { TContact } from "../../providers/contactContext/@Types";
import { CreateContactModal } from "../../components/modal/CreateContactModal/createContactModal";
import { UpdateContactModal } from "../../components/modal/UpdateContactModal/updateContactModal";
import { UpdateUserModal } from "../../components/modal/updateUserModal/updateUserModal";
import { DeleteUserModal } from "../../components/modal/deleteAccountModal/deleteAccountModal";
import { DeleteContactModal } from "../../components/modal/deleteContactModal/deleteContactModal";

export function DashPage() {
  const {
    user,
    loading,
    getUserLoged,
    deleteUserModal,
    setDeleteUserModal,
    updateUserModal,
    setUpdateUserModal,
  } = useContext(UserContext);

  const {
    createContactModal,
    setCreateContactModal,
    updateContactModal,
    setUpdateContactModal,
    setContact,
    deleteContactModal,
    setDeleteContactModal,
  } = useContext(ContactContext);

  let token = localStorage.getItem("KNZ-Schedule-Token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      toast.success("Você deve estar logado para acessar essa página !!");
    } else {
      getUserLoged();
    }
  }, []);

  function handleUpdateContactModal(contact: TContact) {
    setContact(contact);
    setUpdateContactModal(true);
  }

  function handleDeleteContactModal(contact: TContact) {
    setContact(contact);
    setDeleteContactModal(true);
  }

  return (
    <>
      <StyledDash>
        <Header />

        {loading ? (
          <h1 className="loading">Carregando...</h1>
        ) : (
          <>
            <div className="welcome">
              <h2>{user?.fullName}</h2>
              <span>{user?.email}</span>
              <span>{user?.phone}</span>
            </div>

            <section className="contacts">
              <div>
                <h2>Contatos</h2>
                <SiAddthis onClick={() => setCreateContactModal(true)} />
              </div>

              {user?.contacts ? (
                user.contacts.length <= 0 ? (
                  <p className="empty">
                    Você ainda não cadastrou nenhum contato
                  </p>
                ) : (
                  <ul className="contactsList">
                    {user.contacts.map((contact) => (
                      <li key={contact!.id}>
                        <div className="description">
                          <h3>{contact?.fullName}</h3>
                          <span>{contact?.email}</span>
                          <span>{contact?.phone}</span>
                        </div>
                        <div className="buttons">
                          <button
                            className="updateContact"
                            onClick={() => handleUpdateContactModal(contact!)}
                          >
                            Atualizar Contato
                          </button>
                          <button
                            className="deleteContact"
                            onClick={() => handleDeleteContactModal(contact!)}
                          >
                            Deletar Contato
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )
              ) : null}
            </section>
          </>
        )}
      </StyledDash>

      {createContactModal ? (
        <CreateContactModal setCreateContactModal={setCreateContactModal} />
      ) : null}

      {updateContactModal ? (
        <UpdateContactModal setUpdateContactModal={setUpdateContactModal} />
      ) : null}

      {updateUserModal ? (
        <UpdateUserModal setUpdateUserModal={setUpdateUserModal} />
      ) : null}

      {deleteUserModal ? (
        <DeleteUserModal setDeleteUserModal={setDeleteUserModal} />
      ) : null}

      {deleteContactModal ? (
        <DeleteContactModal setDeleteContactModal={setDeleteContactModal} />
      ) : null}
    </>
  );
}
