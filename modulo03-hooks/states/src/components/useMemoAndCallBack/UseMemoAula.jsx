import React from "react";

function operacaoLenta() {
  let cont = 0;
  while (cont < 999999999) {
    cont++;
  }
  return cont;
}

const UseMemoAula = () => {
  const [contar, setContar] = React.useState(0);

  const t1 = performance.now();

  const valor = React.useMemo(() => operacaoLenta(), []);

  console.log(valor);

  console.log(`tempo gasto ${performance.now() - t1}`);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default UseMemoAula;
