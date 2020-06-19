import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FormInput from "./FormInput";
const Form = ({ inputValues, rate, year, amount, interest }) => {
  return (
    <div className="container">
      <form className="p-4">
        {inputValues.map((value) => (
          <FormInput values={(inputValues, rate, year, amount, interest)} />
        ))}
      </form>
    </div>
  );
};

export default Form;
