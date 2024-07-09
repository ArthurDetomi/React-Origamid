import React from "react";

const ExercOne = () => {
  const [usuario, setUsuario] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [response, setResponse] = React.useState(null);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUsuario({
      ...usuario,
      [id]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    }).then((response) => {
      setResponse(response);
    });

    setUsuario({
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input id="nome" onChange={handleChange} required type="text" />
      <label htmlFor="email">E-mail:</label>
      <input id="email" onChange={handleChange} required type="email" />
      <label htmlFor="senha">Senha:</label>
      <input id="senha" onChange={handleChange} required type="password" />
      <label htmlFor="cep">Cep:</label>
      <input id="cep" onChange={handleChange} type="text" />
      <label htmlFor="rua">Rua:</label>
      <input id="rua" onChange={handleChange} type="text" />
      <label htmlFor="numero">Número:</label>
      <input id="numero" onChange={handleChange} type="text" />
      <label htmlFor="bairro">Bairro:</label>
      <input id="bairro" onChange={handleChange} type="text" />
      <label htmlFor="cidade">Cidade:</label>
      <input id="cidade" onChange={handleChange} type="text" />
      <label htmlFor="estado">Estado:</label>
      <input id="estado" onChange={handleChange} type="text" />
      {response && response.ok && <p>Usuário Criado</p>}
      {response && console.log(response)}
      <button>Cadastrar</button>
    </form>
  );
};

export default ExercOne;
