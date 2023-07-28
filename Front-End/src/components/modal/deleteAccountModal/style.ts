import { styled } from "styled-components";

export const StyledDeleteUserModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: var(--grey-3);

  h1 {
    width: 100%;
    text-align: center;
    color: var(--grey-1);
  }

  button {
    background-color: var(--color-primary-negative);
    padding: 1rem 0;
    color: var(--grey-0);
    font-weight: 700;
    border-radius: 5px;
  }

  button:hover {
    background-color: var(--color-primary);
  }
`;
