import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./last.css";

export default class Last extends Component {
  render() {
    return (
      <Container className="last">
        <Row>
          <Col xs={12} md={12}>
            <h1>
              <c style={{color:'#09216C'}}>Sign up</c> now!
            </h1>
            <p>
              ready to get started? simply fill out the form to register for
              our exclusive free trial!
            </p>
            <a href="Register"><Button variant="outline-info">register now</Button>{" "}</a>
          </Col>
        </Row>
      </Container>
    );
  }
}
