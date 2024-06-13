import React from "react";

const Produto = () => {
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener("scroll", handleScroll);
    // Evento que ocorre assim que o elemento está para sair da tela.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <p>Meu produto</p>
    </div>
  );
};

export default Produto;
