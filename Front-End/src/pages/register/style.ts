import { styled } from "styled-components";

export const StyledRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 500px;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
  }

  & > div > h1 {
    color: var(--color-primary);
  }

  & > div > a {
    background-color: var(--grey-3);
    color: var(--grey-0);
    padding: 0.5rem 2rem;
    border-radius: 5px;
  }
`;

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  padding: 1rem;
  gap: 25px;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  color: var(--grey-0);

  & > div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 10px;
    width: 100%;
  }

  div > input {
    width: 100%;
    padding: 1rem;
    background-color: var(--grey-2);
    border-radius: 5px;
    color: var(--grey-1);
  }

  div > input::placeholder {
    font-size: 1rem;
  }

  div > select {
    width: 100%;
    padding: 1rem;
    background-color: var(--grey-2);
    border-radius: 5px;
    color: var(--grey-1);
  }

  div > select {
    font-size: 1rem;
  }

  .cadastrar {
    width: 100%;
    padding: 1rem;
    color: var(--grey-0);
    border-radius: 5px;
    font-size: 1rem;
    background-color: var(--color-primary-negative);
  }

  .cadastrar:hover {
    background-color: var(--color-primary);
  }
`;
