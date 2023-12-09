// UserList.js
import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Função para obter usuários do localStorage
  const getUsersFromLocalStorage = () => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  };

  // Efeito para carregar usuários do localStorage ao montar o componente
  useEffect(() => {
    getUsersFromLocalStorage();
  }, []);

  return (
    <div>
      <h2>Lista de Usuários Cadastrados</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
