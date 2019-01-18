import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Checklist from "./components/Checklist";
import ChecklistV2 from "./components/Checklistv2";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Checklist /> */}
        <ChecklistV2 />
      </div>
    );
  }
}

export default App;
