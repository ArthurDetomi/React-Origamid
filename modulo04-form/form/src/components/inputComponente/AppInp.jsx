import React from "react";
import Input from "./Input";

const AppInp = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <form>
      <Input
        label="Nome:"
        id="nome"
        value={nome}
        setValue={setNome}
        type="text"
        required
      />
      <Input
        label="Email:"
        id="email"
        value={email}
        setValue={setEmail}
        type="email"
        required
      />

      <button>Enviar</button>
    </form>
  );
};

export default AppInp;
