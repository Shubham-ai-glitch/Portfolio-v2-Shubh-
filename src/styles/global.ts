import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ isDark: boolean }>`
  :root {
    --green: #23ce6b;
    --black: #121212;
    --white: #ffffff;
  }
  * {
    margin: 0; padding: 0; box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    transition: background-color 0.4s, color 0.4s;
  }
  body {
    background-color: ${props => props.isDark ? 'var(--black)' : 'var(--white)'};
    color: ${props => props.isDark ? 'var(--white)' : 'var(--black)'};
    overflow-x: hidden;
  }
  h1, h2, h3 { color: var(--green); }
  a { text-decoration: none; color: inherit; }
`
