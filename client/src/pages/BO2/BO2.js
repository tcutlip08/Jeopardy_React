import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Question from "../../components/Question/Question";
import BO2Object from "./BO2.json";
import "./BO2.css";

class BO2 extends Component {
  state = {
    questions: BO2Object,
    game: false,
    score: 0,
    clickedQuestion: ""
  };

  componentDidMount() {}

  componentDidUpdate() {}

  clickedQuestion(questions, points) {
    this.setState({
      clickedQuestion: {
        questions: questions[Math.floor(Math.random() * questions.length)],
        points: points
      }
    });
  }

  clickedAnswer = (boolean, points) => {
    if (boolean) {
      console.log("Correct");
      this.setState({
        score: this.state.score + this.state.clickedQuestion.points,
        clickedQuestion: ""
      });
    } else {
      console.log("Wrong");
      this.setState({
        // score: this.state.score + this.state.clickedQuestion.points,
        clickedQuestion: ""
      });
    }
  };

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
          ) : (
            <>
              <Row className="game">
                {this.state.questions.map(data => {
                  return (
                    <Col className="gameMode">
                      <b>{data.mode}</b>
                      <hr />
                      {data.category.map(level => {
                        return (
                          <>
                            <button
                              className="btn btn-primary"
                              id={level.difficuilty}
                              value={level.points}
                              onClick={() =>
                                this.clickedQuestion(
                                  level.questions,
                                  level.points
                                )
                              }
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
          )}
        </Container>
      </div>
    );
  }
}

export default BO2;
