import React from "react";
import Produto from "./Produto";

const EffectMain = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Botão</button>
    </div>
  );
};

export default EffectMain;
