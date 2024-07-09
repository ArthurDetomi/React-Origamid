import React from "react";

const AulaSelect = () => {
  const [select, setSelect] = React.useState("");
  return (
    <form>
      <select
        id="produtos"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">notebook</option>
        <option value="smartphone">smartphone</option>
        <option value="tablet">tablet</option>
      </select>
      {select}
    </form>
  );
};

export default AulaSelect;
