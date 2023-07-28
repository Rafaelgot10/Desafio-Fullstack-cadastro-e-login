import { styled } from "styled-components";

export const StyledCreateContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: var(--grey-3);

  & > div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    gap: 10px;
  }

  label {
    color: var(--grey-1);
  }

  input {
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--grey-2);
    color: var(--grey-0);
  }

  select {
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--grey-2);
    color: var(--grey-0);
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
