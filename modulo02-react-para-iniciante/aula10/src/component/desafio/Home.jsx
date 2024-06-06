import React from "react";
import Titulo from "./Titulo";

function Home({ props }) {
  return (
    <section>
      <Titulo texto={"Home"} />
      <p>Essa é a home do site</p>
    </section>
  );
}

export default Home;
