import React from "react";

const Produto = () => {
  return (
    <div
      className="card bg-dark text-white m-5 animeLeft"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header">Notebook</div>
      <div className="card-body">
        <h5 className="card-title">R$ 2500</h5>
        <p className="card-text">
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </p>
      </div>
    </div>
  );
};

export default Produto;
