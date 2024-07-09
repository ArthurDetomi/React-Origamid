import React from "react";

const AulaRadio = () => {
  const [produto, setProduto] = React.useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      {produto}
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="Notebook"
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="Smartphone"
        />
        Smartphone
      </label>
    </form>
  );
};

export default AulaRadio;
