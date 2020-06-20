import React, { useState, ceateContext, createContext } from "react";
import React from "react";

export const InterestContext = createContext();
const [rate, setRate] = useState(null);
const [year, setYear] = useState(null);
const [amount, setAmount] = useState(null);
const [interest, setInterest] = useState(null);

const findInterest = () => {
  if (!interest) {
    setInterest((rate * year * amount) / 100);
  } else if (!rate) {
    setRate((interest * 100) / (year * amount));
  } else if (!year) {
    setYear((interest * 100) / (rate * amount));
  }
};
const handleRate = (e) => {
  setRate(e.target.value);
};
const handleAmount = (e) => {
  setAmount(e.target.value);
};
const handleYear = (e) => {
  setYear(e.target.value);
};
const handleInterest = (e) => {
  setInterest(e.target.value);
};

return (
  <InterestContext.Provider
    value={{
      rate,
      year,
      amount,
      interest,
      handleRate,
      handleYear,
      handleAmount,
      handleInterest,
      findInterest,
    }}
  >
    {props.children}
  </InterestContext.Provider>
);

export default InterestContext;
