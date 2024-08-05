import React from "react";
import Produto from "../frameworks/Produto";

const Button = () => {
  const [activate, setActivate] = React.useState(false);

  return (
    <div>
      <button onClick={() => setActivate(!activate)}>Ativar</button>
      {activate && <Produto />}
    </div>
  );
};

export default Button;
