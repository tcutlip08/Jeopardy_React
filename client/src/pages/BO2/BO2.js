import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BO2 extends Component {
  state = {
    game: false,
    score: 0
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  clickedQuestion() {
    this.setState({
      score: this.state.score + 100
    });
  }

  startGame() {
    this.setState({
      game: true
    });
  }

  resetGame() {
    this.setState({
      // Reset questions too
      score: 0
    });
  }

  render() {
    return (
      <div className="BO2">
        <Container>
          {this.state.game ? (
            <>
              <Row>
                <Col>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.resetGame()}
                  >
                    Reset
                  </button>
                </Col>
                <Col>
                  <Link to="/">
                    <button className="btn btn-danger">New Game</button>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>Game goes here</Col>
              </Row>
              <Row>
                <Col>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.clickedQuestion()}
                  >
                    Question
                  </button>
                </Col>
              </Row>
            </>
          ) : (
            <Col>
              <button
                className="btn btn-success"
                onClick={() => this.startGame()}
              >
                Start
              </button>
            </Col>
          )}
        </Container>
      </div>
    );
  }
}

export default BO2;
