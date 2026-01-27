import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #23ce6b;
    --black: #121212;
    --white: #f0f6fc;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: var(--black);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: var(--green);
  }
`
