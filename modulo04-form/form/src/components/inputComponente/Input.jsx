import React from "react";

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
