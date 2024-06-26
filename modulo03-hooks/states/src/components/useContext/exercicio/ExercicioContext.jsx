import React from "react";
import { GlobalStorageEx } from "./GlobalContextEx";
import Auxiliar from "./Auxiliar";

const ExercicioContext = () => {
  return (
    <GlobalStorageEx>
      <Auxiliar />
    </GlobalStorageEx>
  );
};

export default ExercicioContext;
