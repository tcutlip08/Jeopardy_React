import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BO2Object from "./BO2.json";

class BO2 extends Component {
  state = {
    questions: BO2Object,
    game: false,
    score: 0,
    clickedQuestion: {}
  };

  componentDidUpdate() {
    console.log(this.state.questions);
  }

  clickedQuestion(category) {
    this.state.questions.map(data => {
      if (data.mode === category) {
      }
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
      game: false,
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
                {this.state.questions.map(data => {
                  return (
                    <Col>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.clickedQuestion(data.mode)}
                      >
                        {data.mode}
                      </button>
                    </Col>
                  );
                })}
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
