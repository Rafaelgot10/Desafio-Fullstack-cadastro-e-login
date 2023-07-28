import { styled } from "styled-components";

export const StyledDash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;

  .empty {
    background-color: var(--grey-3);
    width: 100%;
    padding: 30px 0;
    color: var(--grey-1);
    font-weight: 700;
    border-radius: 5px;
    text-align: center;
  }

  .welcome {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    color: var(--grey-0);
    align-self: flex-start;
    padding: 3rem 1rem;
    border-bottom: solid var(--grey-2) 0.5px;
  }

  .welcome > h2 {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .welcome > span {
    font-size: 1rem;
    color: var(--grey-1);
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
  }

  .contacts > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
  }
  .contacts > div > h2 {
    font-size: 2.5rem;
    color: var(--grey-2);
  }

  .contacts > div > svg {
    height: 30px;
    width: 30px;
    color: var(--grey-2);
  }

  .contactsList {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .contactsList > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-3);
    padding: 1rem;
    border-radius: 5px;
    gap: 5px;
    width: 100%;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-self: self-start;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 10px;
  }

  .updateContact {
    background-color: var(--grey-1);
    padding: 0.5rem;
    border-radius: 5px;
  }

  .deleteContact {
    background-color: var(--color-primary-negative);
    padding: 0.5rem;
    border-radius: 5px;
  }

  .updateContact:hover {
    background-color: var(--grey-0);
  }

  .deleteContact:hover {
    background-color: var(--color-primary);
  }

  @media (min-width: 600px) {
    .loading {
      font-size: 3rem;
    }
  }
`;
