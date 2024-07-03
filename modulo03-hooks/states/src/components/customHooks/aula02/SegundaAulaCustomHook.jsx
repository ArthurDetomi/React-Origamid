import React from "react";

import useLocalStorage from "../useLocalStorage";
import useFetch from "./useFetch";

const SegundaAulaCustomHook = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, error, isLoading } = useFetch();

  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto");
  }, [request]);

  console.log(data);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={(e) => handleClick(e)}>Notebook</button>
      <button onClick={(e) => handleClick(e)}>Telefone</button>
      {isLoading && <p>Carregando...</p>}
      {error && <p>error.message</p>}
      {data !== null
        ? data.map((produto) => <h1 key={produto.id}>{produto.nome}</h1>)
        : null}
    </div>
  );
};

export default SegundaAulaCustomHook;
