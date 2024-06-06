import React from "react";
import ExercicioArray from "./component/ExercicioArray";
import Titulo from "./component/propriedades/Titulo";
import Form from "./component/propriedades/form/Form";
import PaginaPrincipal from "./component/desafio/PaginaPrincipal";

const App = () => {
  return (
    <div>
      {/*
      <h1>Aula arrays</h1>
      <ExercicioArray />
      <hr />
      <h1>Aula Propriedades</h1>
      <Titulo titulo={"Titulo 1"} color={"blue"}>
        Isso é um Children
        <p>Teste</p>
      </Titulo>
      <Form />
      */}
      <PaginaPrincipal />
    </div>
  );
};

export default App;
