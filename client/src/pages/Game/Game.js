import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Question from "../../components/Question/Question";
import BO2Object from "./JSON/BO2.json";
import "./Game.css";

class BO2 extends Component {
  state = {
    questions: "",
    game: false,
    score: 0,
    clickedQuestion: ""
  };

  componentDidMount() {
    this.resetGame();
  }

  componentDidUpdate() {
    console.log(BO2Object);
  }

  clickedQuestion(object) {
    let questions = this.state.questions;
    questions.map((modeArray, i) => {
      if (modeArray.mode === object.mode) {
        modeArray.category.map((difficuiltyArray, j) => {
          if (difficuiltyArray.points === object.points) {
            questions[i].category[j].clicked = true;
            this.setState({
              questions: questions,
              clickedQuestion: {
                questions:
                  object.questions[
                    Math.floor(Math.random() * object.questions.length)
                  ],
                points: object.points
              }
            });
            return ":)";
          }
          return ":)";
        });
      }
      return ":)";
    });
  }

  clickedAnswer = boolean => {
    if (boolean) {
      console.log("Correct");
      this.setState({
        score: this.state.score + this.state.clickedQuestion.points,
        clickedQuestion: ""
      });
    } else {
      console.log("Wrong");
      this.setState({
        clickedQuestion: ""
      });
    }
  };

  resetGame() {
    if (this.props.location.pathname === "/black-ops-2") {
      this.setState({
        questions: BO2Object,
        game: false,
        score: 0,
        clickedQuestion: ""
      });
    }
  }

  render() {
    return (
      <div className="BO2">
        <Container>
          <Row>
            <Col>
              >
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
            <Col>Score:&nbsp;{this.state.score ? this.state.score : "0"}</Col>
          </Row>
          {this.state.clickedQuestion ? (
            <Question
              question={this.state.clickedQuestion.questions.question}
              options={this.state.clickedQuestion.questions.options}
              answer={this.state.clickedQuestion.questions.answer}
              points={this.state.clickedQuestion.points}
              onClick={this.clickedAnswer}
            />
          ) : this.state.questions ? (
            <>
              <Row className="game">
                {this.state.questions.map(data => {
                  return (
                    <Col className="gameMode">
                      <b>{data.mode}</b>
                      <hr />
                      {data.category.map(level => {
                        if (level.clicked) {
                          return (
                            <>
                              <button
                                className="btn btn-danger"
                                id="gameButtons"
                                value={level.points}
                              >
                                {level.points}
                              </button>
                              <br />
                            </>
                          );
                        }
                        return (
                          <>
                            <button
                              className="btn btn-primary"
                              id="gameButtons"
                              value={level.points}
                              onClick={() => this.clickedQuestion(level)}
                            >
                              {level.points}
                            </button>
                            <br />
                          </>
                        );
                      })}
                    </Col>
                  );
                })}
              </Row>
            </>
          ) : (
            <>You'll Never see this message</>
          )}
        </Container>
      </div>
    );
  }
}

export default BO2;
