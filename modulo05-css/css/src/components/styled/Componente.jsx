import React from "react";
import styled from "styled-components";

const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const Button = styled.button`
  background: ${({ ativo }) => (ativo ? "#53d956" : "#000")};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const Componente = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <Preco cor="#53d956">R$ 2999</Preco>
      <Preco cor="#84e">R$ 1999</Preco>
      <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
        Ativar
      </Button>
    </div>
  );
};

export default Componente;
