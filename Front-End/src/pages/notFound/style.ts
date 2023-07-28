import { styled } from "styled-components";

export const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 1rem;

  h1 {
    font-size: 5rem;
    margin-top: 5rem;
    color: var(--grey-1);
  }

  span {
    color: var(--grey-2);
  }

  p {
    color: var(--grey-2);
  }

  a {
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 00;
    color: var(--grey-0);
    background-color: var(--color-primary-negative);
  }

  a:hover {
    background-color: var(--color-primary);
  }
`;
