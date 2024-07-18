import React from "react";
import Input from "./Input";

const Validacao = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(cep = "") {
    if (cep.length === 0) {
      setError("Preencha um valor");
    } else if (!/^\d{5}?-\d{3}$/.test(cep)) {
      setError("Preencha um cep valido");
    } else {
      setError(null);
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) {
      validateCep(target.value);
    }
    setCep(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (error) {
      alert("Não enviou");
    } else {
      alert("Enviou");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Cep"
        id="cep"
        name="cep"
        type="text"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && error}
      <br></br>
      <button>Enviar</button>
    </form>
  );
};

export default Validacao;
