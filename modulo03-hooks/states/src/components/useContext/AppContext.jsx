import React from "react";

import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContext";

const AppContext = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default AppContext;
