import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  const [inputValues, setInputValues] = useState([
    "Rate",
    "Year",
    "Amount",
    "Interest",
  ]);
  const [rate, setRate] = useState(null);
  const [year, setYear] = useState(null);
  const [amount, setAmount] = useState(null);
  const [interest, setInterest] = useState(null);
  const findInterest = () => {
    if (rate && year && amount && !interest) {
      setInterest((rate * year * amount) / 100);
    } else if (interest && year && amount && !rate) {
      setRate((interest * 100) / (year * amount));
    } else if (interest && rate && amount && !year) {
      setYear((interest * 100) / (rate * amount));
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Form inputValues={(inputValues, rate, year, amount, interest)} />
      <Button />
    </div>
  );
}

export default App;
