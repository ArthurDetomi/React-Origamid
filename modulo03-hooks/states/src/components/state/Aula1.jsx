import React from "react";

const Aula1 = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({ nome: "Arthur", idade: 22 });

  function handleClick() {
    setAtivo((ativo) => !ativo);
    setDados({
      ...dados,
      clicou: "clicou",
    });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.clicou}</p>
      <button className="ativo" onClick={handleClick}>
        {ativo ? "Ativo" : "Inativo"}
      </button>
    </div>
  );
};

export default Aula1;
