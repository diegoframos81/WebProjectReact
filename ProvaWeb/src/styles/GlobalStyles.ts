import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: color 100ms ease-in-out;
    transition: background-color 100ms ease-in-out;
  }

  :root {
    ${(props) => {
      const theme = props.theme;

      let append = "";

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}

    
  }

  html {
    font-size: 62.5%; // 1rem = 10px
    scroll-behavior: smooth;
    height: 100%;

    @media (min-width: 768px) {
      font-size: 68.75%; // +1px
    }
    @media (min-width: 1024px) {
      font-size: 75%; // +1px
    }
  }

  body { 
    font-size: 1.6rem; // 16px
    background-color: var(--background);
  }

  section {
    scroll-margin-top: 70px;
  }

  a {
    text-decoration: none;
  }

  a, button, p, input {
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, span {
    font-family: 'Sora', sans-serif;
  }

  ul, li {
    list-style: none;
  }
`;

export { GlobalStyles };
