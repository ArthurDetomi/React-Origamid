import React from "react";

const Titulo = (props) => {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.titulo}</h1>
      {props.children}
    </div>
  );
};

export default Titulo;
