import React from "react";

const Produto = ({ produto }) => {
  if (!produto) {
    return <></>;
  }
  console.log(produto);
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>R$ {produto.preco}</p>
      {produto.fotos.map((foto) => (
        <img key={foto.titulo} src={foto.src} alt={foto.titulo} />
      ))}
    </div>
  );
};

export default Produto;
