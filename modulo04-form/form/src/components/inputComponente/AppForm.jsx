import React from "react";
import Input from "./Input";
import Select from "./Select";

const AppForm = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");

  return (
    <form>
      <Select
        id="produto"
        value={produto}
        setValue={setProduto}
        name={produto}
        options={["Smarthphone", "Tablet", "Notebook", "Monitor"]}
        required
      />
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

export default AppForm;
