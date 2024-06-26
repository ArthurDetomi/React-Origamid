import React from "react";
import { GlobalContextEx } from "./GlobalContextEx";

const Auxiliar = () => {
  const global = React.useContext(GlobalContextEx);
  console.log(global.dados);

  return (
    <div>
      {global.dados &&
        global.dados.map((produto) => <p key={produto.nome}>{produto.nome}</p>)}
      <button onClick={() => global.limparDados()}>botao</button>
    </div>
  );
};

export default Auxiliar;
