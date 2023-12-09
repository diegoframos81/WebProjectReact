import React from "react";
import { FcGoogle } from "react-icons/fc";

import Image from "../../assets/img/hero-illustration.svg";

import {
  Container,
  LeftSide,
  Illustration,
  RightSide,
  Input,
  Actions,
  Buttons,
  Button,
  Wrapper,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";


const Login: React.FC = () => {
const navigate = useNavigate();
  return (
    <Container>
      <LeftSide>
        <Illustration src={Image} />
      </LeftSide>

      <RightSide>
        <Wrapper>
          <div className="title">
            <h1>Faça login na sua conta</h1>
            <h2>Bem vindo de volta</h2>
          </div>

          <Input>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </Input>

          <Input>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
          </Input>

          <Actions>
            <div className="check">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembre de mim</label>
            </div>

            <a href="#" className="link">
              Esqueceu a senha
            </a>
          </Actions>

          <Buttons>
            <Button type="submit" onClick={() => navigate("/main")} className="buttonEnter">Entrar</Button>
            <Button type="submit">
              <FcGoogle size={20} /> Ou faça login com Google
            </Button>
          </Buttons>

          <div className="not-registered">
            <span>Não tem uma conta?</span>
            <Link to="/register">
                <a href="#" className="link">
                  Cadastre-se
                </a>
            </Link>
          </div>
        </Wrapper>
      </RightSide>
    </Container>
  );
};

export default Login;
