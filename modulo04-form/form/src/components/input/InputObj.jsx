import React from "react";

const InputObj = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome: ${form.nome}\nEmail: ${form.email}`);
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="nome"
        name="nome"
        type="text"
        value={form.nome}
        onChange={handleChange}
      />
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  );
};

export default InputObj;
