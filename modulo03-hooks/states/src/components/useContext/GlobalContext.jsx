import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  function adicionarUm() {
    setContar(contar + 1);
  }

  function adicionarDois() {
    setContar(contar + 2);
  }

  return (
    <GlobalContext.Provider
      value={{ nome: "Arthur", adicionarUm, adicionarDois, contar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
