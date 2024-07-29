import React from "react";
import Title from "./Title";
import UserForm from "./UserForm";
import Produto from "./Produto";

const AppImports = () => {
  return (
    <div>
      <p className="text">Meu site</p>

      <h2>Exemplo de conflito de css</h2>
      <Title text="Meu título de teste" />
      <Produto />
      <hr />
      <UserForm />
    </div>
  );
};

export default AppImports;
