import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <div>
      <Input id="email" type="email" label="E-mail" required={true} />
      <Input id="password" type="password" label="Password" />
      <Button />
    </div>
  );
};

export default Form;
