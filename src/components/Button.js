import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import InterestContext from "../context/InterestContext";
const Button = () => {
  const { findInterest } = useContext(InterestContext);
  return (
    <div className="form-group row justify-content-center">
      <button className="btn btn-success" onClick={findInterest}>
        Calculate
      </button>
    </div>
  );
};

export default Button;
