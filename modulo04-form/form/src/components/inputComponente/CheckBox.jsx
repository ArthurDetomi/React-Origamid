import React from "react";

const CheckBox = ({ options = [], values = [], setValue, ...props }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...values, target.value]);
    } else {
      setValue(values.filter((value) => value !== target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            onChange={(e) => handleChange(e)}
            checked={values.includes(option)}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default CheckBox;
