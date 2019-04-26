import React, { Component } from "react";
import "./App.css";
import Episodes from "./Episodes";
import Heading from "./Heading";
class App extends Component {
  render() {
    return (
      <div className="container">
      <Heading />
      <Episodes />
      </div>
    );
  }
}
export default App;
