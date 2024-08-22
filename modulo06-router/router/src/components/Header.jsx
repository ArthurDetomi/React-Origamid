import React from "react";

// import {Link} from 'react-router-dom'

import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "tomato",
  };

  const location = useLocation();

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(search.get("q"));
    console.log("Toda vez que a rota mudar");
  }, [location]);

  return (
    <nav>
      {/*
      Usando Link
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="contato">Contato</Link>
      */}

      <NavLink to="/" end activestyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/sobre" activestyle={activeStyle}>
        Sobre
      </NavLink>
      <NavLink to="/contato" activestyle={activeStyle}>
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
