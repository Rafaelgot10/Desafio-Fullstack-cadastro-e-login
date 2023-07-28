import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px;
  padding-top: 80px;

  h1 {
    color: var(--color-primary);
    margin-bottom: 20px;
  }
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  max-width: 500px;
  background-color: var(--grey-3);
  border-radius: 10px;
  gap: 30px;
  color: var(--grey-0);

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-self: flex-start;
  }
  div > input {
    border-radius: 5px;
    border: solid var(--grey-2) 2px;
    width: 100%;
    color: var(--grey-0);
    padding: 15px;
    background-color: var(--grey-2);
  }

  div > input:hover {
    border: solid var(--grey-1) 2px;
  }

  div > input::placeholder {
    color: var(--grey-1);
  }

  .loginButton {
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--grey-0);
    background-color: var(--color-primary-negative);
  }

  .loginButton:hover {
    background-color: var(--color-primary);
  }

  span {
    color: var(--grey-1);
    font-weight: 700;
  }

  .loginButtonCadaste-se {
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 00;
    color: var(--grey-0);
    background-color: var(--grey-2);
  }

  .loginButtonCadaste-se:hover {
    background-color: var(--grey-1);
  }
`;
