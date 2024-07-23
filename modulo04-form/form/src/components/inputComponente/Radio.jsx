import React from "react";

const Radio = ({ options = [], value, ...props }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
