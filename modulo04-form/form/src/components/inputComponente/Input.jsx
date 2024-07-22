import React from "react";

const Input = ({ id, label, error, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
