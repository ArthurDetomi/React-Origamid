import React from "react";

import Home from "./Home";
import Produtos from "./Produtos";
import Header from "./Header";

export default function PaginaPrincipal() {
  const { pathname } = window.location;

  let Component;
  if (pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <div>
      <Header />
      <Component />
    </div>
  );
}
