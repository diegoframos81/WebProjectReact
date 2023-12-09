import React, { useState } from "react";


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
} from "../Login/styles"
import { useNavigate } from "react-router-dom";
import UserList from "../../components/UserList";


const Register: React.FC = () => {
const navigate = useNavigate();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
 // Função para lidar com o cadastro do usuário
 const handleRegister = (e) => {
    
    e.preventDefault();
    console.log(email, password);
    
    

    
    navigate("/userList");
  };

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
            <input type="email" id="email" onChange={(e) => {setEmail(e.target.value)}}/>
          </Input>

          <Input>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" onChange={(e) => {setPassword(e.target.value)}}/>
          </Input>

        
          <Input>
            <label htmlFor="password">Confirme a Senha</label>
            <input type="password" id="password" onChange={(e) => {setPassword(e.target.value)}}/>
          </Input>

          <Buttons>
            <Button type="submit"
              onClick={handleRegister} className="buttonRegister">Cadastre-se</Button>
              
          </Buttons>
          
        </Wrapper>
      </RightSide>
      
    </Container>
  );
};

export default Register;
