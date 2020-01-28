import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Main extends Component {
  state = {
    game: false,
    score: 0
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  startGame() {
    console.log(this.state);
  }

  resetGame() {
    console.log("Fuck, #NateWasHere");
  }

  render() {
    return (
      <div className="main">
        <Container>
          <Row>
            <Col>
              <button className="btn btn-success" onClick={this.startGame}>
                Start
              </button>
            </Col>
            <Col>
              <button className="btn btn-danger" onClick={this.resetGame}>
                Reset
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
