import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Checklist from "./components/Checklist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Checklist />
      </div>
    );
  }
}

export default App;
