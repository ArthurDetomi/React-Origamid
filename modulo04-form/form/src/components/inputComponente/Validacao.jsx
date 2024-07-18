import React from "react";
import Input from "./Input";

const Validacao = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(cep = "") {
    if (cep.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}?-\d{3}$/.test(cep)) {
      setError("Preencha um cep valido");
      return false;
    } else {
      setError(null);
      return true;
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

  return (
    <form>
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
    </form>
  );
};

export default Validacao;
