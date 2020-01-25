import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <NavBar />
        <div>Dis be Main Page</div>
      </div>
    );
  }
}

export default Main;
