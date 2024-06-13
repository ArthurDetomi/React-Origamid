import React from "react";
import ProdutoExEffect from "./ProdutoExEffect";

const BASE_URL = "https://ranekapi.origamid.dev/json/api/produto";
const KEY = "produto";

const ExercicioEffect = () => {
  const [nomeProduto, setNomeProduto] = React.useState(() => {
    const nameProduct = window.localStorage.getItem(KEY);
    return nameProduct;
  });
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (nomeProduto) {
      fetch(BASE_URL + "/" + nomeProduto)
        .then((response) => response.json())
        .then((json) => setDados(json));
      window.localStorage.setItem(KEY, nomeProduto);
    }
  }, [nomeProduto]);

  const handleClick = (event) => {
    const novoNomeProduto = event.target.innerText;
    setNomeProduto(novoNomeProduto);
  };

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>notebook</button>
      <button onClick={(e) => handleClick(e)}>smartphone</button>
      {dados && <ProdutoExEffect produto={dados} />}
    </div>
  );
};

export default ExercicioEffect;
