import styled, { css } from "styled-components";

interface IHeaderProps {
  nav: boolean;
}

export const StyledHeader = styled.header<IHeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
  gap: 20px;
  border-bottom: solid var(--grey-2) 0.5px;

  svg {
    width: 30px;
    height: 30px;
    color: var(--grey-1);
    cursor: pointer;
  }

  h1 {
    color: var(--color-primary);
  }

  ${({ nav }) => {
    if (nav) {
      return css`
        .navDown {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
      `;
    } else {
      return css`
        .navDown {
          display: none;
        }
      `;
    }
  }}

  .navDown  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .navDown > ul > li {
    text-align: center;
    background-color: var(--grey-3);
    border-radius: 5px;
  }

  .navDown > ul > li > button {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: var(--grey-3);
    border-radius: 5px;
    font-weight: 700;
    color: var(--grey-1);
    padding: 10px 0;
    width: 200px;
  }

  .navDown > ul > li > button:hover {
    color: var(--grey-0);
  }

  .navUp > ul > li {
    text-align: center;
    background-color: var(--grey-3);
    border-radius: 5px;
  }

  .navUp > ul > li > button {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: var(--grey-3);
    border-radius: 5px;
    font-weight: 700;
    color: var(--grey-1);
    padding: 10px 0;
    width: 150px;
  }

  .navUp > ul > li > button:hover {
    color: var(--grey-0);
  }

  .navUp {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .navUp__ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .menuIcon {
    display: flex;
  }

  .navUp__ul {
    display: none;
  }

  @media (min-width: 770px) {
    .menuIcon {
      display: none;
    }

    .navUp__ul {
      display: flex;
    }

    .navDown {
      display: none;
    }
  }
`;
