import React from "react";
import UseForm from "./UseForm";
import Input from "../Input";

const AppFormDois = () => {
  const cep = UseForm("cep");
  const email = UseForm("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.validate() && cep.validate()) {
      alert("Enviar");
    } else {
      alert("Não enviar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input id="cep" label="cep" error={cep.error} {...cep} required />
      <Input id="email" label="email" error={email.error} {...email} required />
      <br />
      <button>Enviar</button>
    </form>
  );
};

export default AppFormDois;
