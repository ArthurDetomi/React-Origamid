import React from "react";

const InputAula = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Ola ${nome} ${email}`);
    setNome("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        name="nome"
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default InputAula;
