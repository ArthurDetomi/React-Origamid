import React from "react";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Numero",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

const usuarioInitial = formFields.reduce((acc, field) => {
  console.log(acc);
  return {
    ...acc,
    [field.id]: "",
  };
}, {});

const ExercOne = () => {
  const [usuario, setUsuario] = React.useState(usuarioInitial);

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

    setUsuario(usuarioInitial);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}:</label>
          <input id={id} onChange={handleChange} required type={type} />
        </div>
      ))}

      {response && response.ok && <p>Usuário Criado</p>}
      {response && console.log(response)}
      <button>Cadastrar</button>
    </form>
  );
};

export default ExercOne;
