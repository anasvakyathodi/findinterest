import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import InterestContext from "./context/InterestContext";

function App() {
  return (
    <InterestContext.Consumer>
      <div className="App">
        <NavBar />
        <Form />
        <Button />
      </div>
    </InterestContext.Consumer>
  );
}

export default App;
