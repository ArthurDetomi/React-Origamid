import React from "react";

const ProdutoExEffect = ({ produto }) => {
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.preco}</p>
    </div>
  );
};

export default ProdutoExEffect;
