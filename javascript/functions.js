const precos = ["Crédito", "R$ 200", "R$ 400", "Contas a pagar"];

const precosFiltro = precos.filter((preco) => preco.includes("R$"));

const precosToNumber = precosFiltro.map((preco) =>
  Number(preco.replace("R$", ""))
);

console.log(precosToNumber);
