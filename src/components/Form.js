import React,{useContext} from "react";
import InterestContext from "../context/InterestContext";
import "bootstrap/dist/css/bootstrap.css";
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
    <div className="container">
      <form className="p-4">
        <div className="form-group row">
          <label className="col-form-label" for="rate">
            Rate
          </label>
          <input
            className="form-control text-input"
            type="number"
            placeholder="Rate"
            value={rate}
            onChange={handleRate}
            id="rate"
          />
        </div>
        <div className="form-group row">
          <label className="col-form-label" for="rate">
            Duration
          </label>
          <input
            className="form-control text-input"
            type="number"
            placeholder="Duration"
            value={year}
            onChange={handleYear}
            id="year"
          />
        </div>
        <div className="form-group row">
          <label className="col-form-label" for="rate">
            Amount
          </label>
          <input
            className="form-control text-input"
            type="number"
            value={amount}
            onChange={handleAmount}
            placeholder="Amount"
            id="amount"
          />
        </div>
        <div className="form-group row">
          <label className="col-form-label" for="rate">
            Interest
          </label>
          <input
            className="form-control text-input"
            type="number"
            value={interest}
            onChange={handleInterest}
            placeholder="Interest"
            id="interest"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
