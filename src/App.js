import React, { Component } from "react";
import "./App.css";
import Episodes from "./Episodes";
import Heading from "./Heading";
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Heading />
        </div>
        <div className="container">
          <Episodes />
        </div>
      </div>
    );
  }
}
export default App;
