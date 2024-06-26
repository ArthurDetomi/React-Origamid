import React from "react";

export const GlobalContextEx = React.createContext();

export const GlobalStorageEx = ({ children }) => {
  const BASE_URL = "https://ranekapi.origamid.dev/json/api/produto/";
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      fetch(BASE_URL)
        .then((response) => response.json())
        .then((json) => setDados(json));
    };

    fetchData();
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <GlobalContextEx.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContextEx.Provider>
  );
};
