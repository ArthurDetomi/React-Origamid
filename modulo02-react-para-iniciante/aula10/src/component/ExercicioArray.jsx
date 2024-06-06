import React from "react";
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const ExercicioArray = () => {
  function convertPriceToNumber(price = "") {
    return Number(price.replace("R$ ", ""));
  }

  return (
    <>
      {produtos
        .filter((produto) => convertPriceToNumber(produto.preco) > 1500)
        .map((produto) => {
          return (
            <div key={produto.id}>
              <h1>{produto.nome}</h1>
              <p>Preço: {produto.preco}</p>
              <ul>
                {produto.cores.map((cor) => {
                  return (
                    <li
                      key={cor}
                      style={{ backgroundColor: cor, color: "#FFF" }}
                    >
                      {cor}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </>
  );
};

export default ExercicioArray;
