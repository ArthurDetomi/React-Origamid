import React from "react";

const Select = ({ options = [], setValue, ...props }) => {
  return (
    <select {...props} onChange={(e) => setValue(e.target.value)}>
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
