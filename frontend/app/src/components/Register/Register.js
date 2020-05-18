import React, { Component } from "react";
import "./register.css";
import { Container, Row, Col } from "reactstrap";
import { Image, Form, Button } from "react-bootstrap";
import pic1 from "./img1.png";

export default class Register extends Component {
  render() {
    return (
      <Container className="register">
        <Row>
          <Col
            xs={12}
            md={6}
            style={{ textAlign: "center"}}
            className="d-none d-lg-block"
          >
            <Image
              style={{ marginTop: "10%" }}
              src={pic1}
              height="400"
              alt="Picture"
            />
          </Col>
          <Col xs={12} md={6}>
            <h3>get started for free!</h3>
            <h5>signup now and avial our services</h5>
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email address" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                register
              </Button>
            </Form>
            <br />
            <p>
              Already have an accout? <a href="Login">login</a>
            </p>

            <p>
              Creating an account means you agree to our{" "}
              <a href="#">Terms & Conditions</a> and
              <a href="#"> Privacy Policy</a>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
