import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Image } from "react-bootstrap";
import Pic3 from "./pic3.png";

import "./third.css";

export default class Second extends Component {
  render() {
    return (
      <div className="morechanges">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h1 style={{color:'#09216C', marginTop:'14%'}}>guranteed premium</h1>
              <h1 style={{color:'#46aaff', marginTop:'-2%'}}>quality</h1>
              <p>
                Every topic we prepare follows strict adherence to each academic
                jurisdiction so that students, without any husstles, will get precisely
                what they are looking for. Moreover, every part of the content
                we produce is treated through layers of rigorous testing to
                ensure only the highest quality material is offered to the students.
              </p>
            </Col>
            <Col xs={12} md={6} style={{textAlign:'center'}}>
              <Image
                src={Pic3}
                height="400"
                alt="Picture"
                style={{ position: "relative" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
