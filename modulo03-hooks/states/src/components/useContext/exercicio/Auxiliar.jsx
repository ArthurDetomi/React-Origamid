import React from "react";
import { GlobalContextEx } from "./GlobalContextEx";

const Auxiliar = () => {
  const global = React.useContext(GlobalContextEx);
  console.log(global.dados);

  return (
    <div>
      <button onClick={() => global.limparDados()}>botao</button>
    </div>
  );
};

export default Auxiliar;
