import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const Exercicio1 = () => {
  const dados = [mario, luana];

  function obterTotalCompra(compras = []) {
    let total = 0;

    compras.forEach((compra) => {
      let valor = Number(compra.preco.replace("R$ ", ""));
      total += valor;
    });

    return total;
  }

  return (
    <div>
      {dados.map((dado, index) => {
        const totalCompras = obterTotalCompra(dado.compras);
        const isMaiorQueDezMil = totalCompras > 10000;

        return (
          <div key={index}>
            <p>Nome: {dado.cliente}</p>
            <p>Idade: {dado.idade}</p>
            <p>Total Gasto: R$ {totalCompras}</p>
            <p>
              Situação:
              {isMaiorQueDezMil ? (
                <span style={{ color: "red" }}>Inativo</span>
              ) : (
                <span style={{ color: "green" }}>Ativo</span>
              )}
            </p>
            {isMaiorQueDezMil && <p>Você está gastando muito</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Exercicio1;
