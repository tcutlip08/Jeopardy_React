import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Container>
          <Row>
            <Col>
              <Link to="/black-ops-2">
                <button className="btn btn-danger game">Black Ops 2</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
