import React from "react";

import useLocalStorage from "./useLocalStorage";

const PrimeiraAulaCustomHook = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={(e) => handleClick(e)}>Notebook</button>
      <button onClick={(e) => handleClick(e)}>Telefone</button>
    </div>
  );
};

export default PrimeiraAulaCustomHook;
