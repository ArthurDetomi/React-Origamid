import React from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const AulaCheckBox = () => {
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState(["vermelho"]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  console.log(cores);

  return (
    <form>
      {termos && <p>Aceitou os termos</p>}
      <input
        type="checkbox"
        value="Termos"
        checked={termos}
        onChange={({ target }) => setTermos(target.checked)}
      />
      Aceite os termos
      <h2>Cores</h2>
      {coresArray.map((cor) => (
        <label key={cor}>
          <input
            type="checkbox"
            checked={checkColor(cor)}
            value={cor}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  );
};

export default AulaCheckBox;
