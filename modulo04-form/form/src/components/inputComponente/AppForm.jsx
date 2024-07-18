import React from "react";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
import CheckBox from "./CheckBox";

const AppForm = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [carro, setCarro] = React.useState("");
  const [fruta, setFruta] = React.useState("");
  const [linguagens, setLinguagens] = React.useState([]);

  return (
    <form>
      <h2>Checkbox</h2>
      <CheckBox
        values={linguagens}
        setValue={setLinguagens}
        options={["PHP", "Python", "Ruby"]}
      />
      <h2>Carros</h2>
      <Radio
        options={["Fusca", "Palio", "Gol", "Fox"]}
        value={carro}
        setValue={setCarro}
      />
      <h2>Frutas</h2>
      <Radio
        options={["Mamão", "Abacate", "Banana", "Melancia"]}
        value={fruta}
        setValue={setFruta}
      />
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
