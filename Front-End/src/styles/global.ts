import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    transition: 1s;
    font-family: 'Nunito', 'Inter', sans-serif;
    
  }

  svg {
    cursor: pointer;
  }

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-size: 1.5rem;
    padding: 16px;
    border-radius: 5px;
  }

  .error{
    color: var(--negative);
  }

  button{
    cursor: pointer;
    font-weight: 700;
  }

  html{
    min-height: 100vh;
    width: 100%;
  }

  .App{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%; 
    background-color: var(--grey-4);
  }
  
  .routes{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%; 
    background-color: var(--grey-4);
  }

  body{
    min-height: 100vh;
    width: 100%;
  }

  #root{
   min-height: 100vh;
   width: 100%;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-2);
    width: 100%;
    margin-top: 5rem;
    max-width: 700px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 1rem;
    color: var(--grey-0);

    > span {
      cursor: pointer;
    }
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: var(--matte);
  }

  :root {

    /* Grey Scale */
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --grey-5: #000;
    --matte: rgb(0, 0, 0, 0.5);
    

    /* Primary Palette */
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    
    /* Feedback Palette */
    --sucess: #3FE864;
    --negative: #E83F5B;
  }
`;
