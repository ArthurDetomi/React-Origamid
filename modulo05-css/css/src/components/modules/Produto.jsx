import React from "react";
import style from "./Produto.module.css";

const Produto = () => {
  return (
    <div>
      <h1 className={style.titulo}>Notebook</h1>
      <p className={style.preco}>R$ 1200</p>
      <button className={style.comprar}>Comprar</button>
    </div>
  );
};

export default Produto;
