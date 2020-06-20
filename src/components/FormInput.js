import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InterestContext from "../context/InterestContext";
const FormInput = ({ value }) => {
  const {
    rate,
    year,
    amount,
    interest,
    handleRate,
    handleYear,
    handleAmount,
    handleInterest,
  } = useContext(InterestContext);
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
