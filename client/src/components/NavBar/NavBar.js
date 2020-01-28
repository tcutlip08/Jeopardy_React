import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Container>
          <Row>
            <Col>
              <Link to="/">
                <button className="btn btn-primary">Home</button>
              </Link>
            </Col>
            <Col>
              <Link to="/main">
                <button className="btn btn-primary">Main</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </nav>
    );
  }
}

export default NavBar;
