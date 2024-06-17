import React from "react";

const UseRefAula2 = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  const handleClick = () => {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho");

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  };

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
    </div>
  );
};

export default UseRefAula2;
