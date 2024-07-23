import React from "react";
import Radio from "../inputComponente/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const AppDesafio = () => {
  const [controlePerguntas, setControlePerguntas] = React.useState({
    index: 0,
    qtdAcertos: 0,
  });
  const [resposta, setResposta] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (resposta === "") {
      return;
    } else if (
      resposta &&
      resposta === perguntas[controlePerguntas.index].resposta
    ) {
      setControlePerguntas({
        qtdAcertos: controlePerguntas.qtdAcertos + 1,
        index: controlePerguntas.index + 1,
      });
    } else {
      setControlePerguntas({
        ...controlePerguntas,
        index: controlePerguntas.index + 1,
      });
    }
    setResposta("");
  }

  function handleChange({ target }) {
    setResposta(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      {controlePerguntas.index < perguntas.length ? (
        <>
          <p>{perguntas[controlePerguntas.index].pergunta}</p>
          <Radio
            options={perguntas[controlePerguntas.index].options}
            value={resposta}
            onChange={(e) => handleChange(e)}
            {...perguntas[controlePerguntas.index]}
          />
          <br />
          <button disabled={resposta === ""}>Responder</button>
        </>
      ) : (
        <p>
          Voce acertou {controlePerguntas.qtdAcertos} de {perguntas.length}{" "}
          perguntas
        </p>
      )}
    </form>
  );
};

export default AppDesafio;
