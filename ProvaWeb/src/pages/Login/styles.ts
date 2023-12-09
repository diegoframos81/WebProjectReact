import styled from "styled-components";

export const Container = styled.div`
:root {
    --green: #04c35c;
    --blue: #2b6cb0;

    --white: #ffffff;
    --white300: #f7fafc;

    --dark: #1a202c;
    --input: #e8e8e8;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 720px) {
      font-size: 58.5%;
    }
    @media (max-width: 480px) {
      font-size: 54.5%;
    }
  }

  body {
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    background-color: var(--white);
    color: var(--dark);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: 'Merriweather', sans-serif;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .buttonEnter, .buttonRegister {

    background: var(--blue);
    padding: 6%4%;
    border-radius: 5px;
    margin-bottom: 5%;
    margin-top: 2%;
    color: var(--white);
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
  }

  button,
  input {
    border: 0;
    outline: 0;
  }
  button:focus,
  input:focus {
    border: 0;
  }

  width: 100vw;
  height: 100vh;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const LeftSide = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    background: #ddd;
  }
`;

export const Illustration = styled.img`
  max-width: 400px;
  padding: 2rem;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;

`;

export const Wrapper = styled.div`
  width: 100%;

  @media (min-width: 572px) {
    max-width: 400px;
  }

  .title {
    display: flex;
    flex-direction: column-reverse;
    gap: 5px;
    margin-bottom: 4rem;

    h2 {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 20px;
    }

    h1 {
      font-size: 3rem;
      line-height: 32.68px;
    }
  }

  .link {
    color: var(--blue);
    transition: all 100ms ease-in-out;

    &:hover {
      filter: brightness(90%);
    }
  }

  .not-registered {
    text-align: center;

    a {
      margin-left: 5px;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.8rem;
  }

  input {
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 15px 10px;
    margin-top: 10px;
    font-family: Lato, sans-serif;
    font-size: 1.6rem;
  }

  input#email {
    margin-bottom: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  .check {
    display: flex;
    align-items: center;
    gap: 5px;

    label, input {
      cursor: pointer;
    }

    input {
      margin-top: 3px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-top: 25px;
`;

export const Button = styled.button`
  font-family: Lato, sans-serif;
  padding: 15px;
  cursor: pointer;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  gap: 10px;
  background: var(--green);
  font-size: 16px;
  font-weight: 400;

  &:last-of-type {
    background: var(--dark);
    margin-bottom: 30px;
  }
`;
