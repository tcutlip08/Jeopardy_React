import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <b>Home</b>
        </Link>
        <Link to="/main">
          <b>Main</b>
        </Link>
      </nav>
    );
  }
}

export default NavBar;
