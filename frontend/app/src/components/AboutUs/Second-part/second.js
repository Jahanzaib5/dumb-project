import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Image } from "react-bootstrap";
import Pic2 from "./pic2.png";

import "./second.css";

export default class Second extends Component {
  render() {
    return (
      <div className="change">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Image
                src={Pic2}
                height="400"
                alt="Picture"
                style={{ position: "relative" }}
              />
            </Col>
            <Col xs={12} md={6}>
              <h1>
                <c style={{ color: "#09216C" }}>Our</c> Story
              </h1>
              <p>
                D.U.M.B project was formed to create a reliable, practical and
                highly accessible platform that offers customized material at a
                fraction of the cost of traditional learning. With recent
                innovations, D.U.M.B's team has diversified its e-learning model
                to nurture the student’s academic growth and prepare them for
                univeristy entrance exam while stimulating their personal
                development.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
