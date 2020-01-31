import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Question.css";

const Question = props => {
  return (
    <Container>
      <Row>
        <Col>{props.question}</Col>
      </Row>
      <Row>
        {props.options.map(option => {
          if (props.answer === option) {
            return (
              <Col>
                <button
                  className="btn btn-primary options"
                  onClick={() => props.onClick(true, props.points)}
                >
                  {option}
                </button>
              </Col>
            );
          } else {
            return (
              <Col>
                <button
                  className="btn btn-primary options"
                  onClick={() => props.onClick(false, props.points)}
                >
                  {option}
                </button>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default Question;
