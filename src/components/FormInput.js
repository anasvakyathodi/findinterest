import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormInput = ({ value }) => {
  return (
    <div className="form-group row">
      <label className="col-form-label" for="rate">
        {value}
      </label>
      <input
        className="form-control text-input"
        type="number"
        placeholder={value}
        id="rate"
      />
    </div>
  );
};

export default FormInput;
