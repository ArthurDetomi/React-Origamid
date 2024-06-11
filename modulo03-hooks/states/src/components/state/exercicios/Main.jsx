import React from "react";

import Produto from "./Produto";

const Main = () => {
  const BASE_URL = "https://ranekapi.origamid.dev/json/api/produto";

  const [dados, setDados] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  async function fetchProdutos(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  function getUrl(produtoNome) {
    return BASE_URL + "/" + produtoNome;
  }

  const handleClick = (event) => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const produtoNome = event.target.innerText;
        const url = getUrl(produtoNome);

        const produtos = await fetchProdutos(url);
        setDados(produtos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  };

  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Tablet
      </button>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && dados && <Produto produto={dados} />}
    </div>
  );
};

export default Main;
