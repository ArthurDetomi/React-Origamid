import React from "react";

import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div>
      <p>Contador Produto {global.contar}</p>
      <button onClick={() => global.adicionarUm()}>Incrementar 1</button>
      <button onClick={() => global.adicionarDois()}>Incrementar 2</button>
    </div>
  );
};

export default Produto;
