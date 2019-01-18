import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Checklist from "./components/Checklist";
import Checklistv2 from "./components/Checklistv2";
import ChecklistV3 from "./components/Checklistv3";

class App extends Component {
  render() {
    return (
      <div >
        <ChecklistV3 />
      </div>
    );
  }
}

export default App;
