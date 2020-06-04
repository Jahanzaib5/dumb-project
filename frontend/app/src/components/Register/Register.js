import React, { Component } from "react";
import "./register.css";
import { Container, Row, Col } from "reactstrap";
import { Image, Form, Button } from "react-bootstrap";
import pic1 from "./img1.png";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

class Register extends Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onAuth(
          values.userName,
          values.email,
          values.password,
          values.confirm
        );
        this.props.history.push("/Dashboard");
      }
    });
  };
  render() {
    return (
      <Container className="register">
        <Row>
          <Col
            xs={12}
            md={6}
            style={{ textAlign: "center" }}
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
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicText">
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  name="confirm"
                  type="password"
                  placeholder="Confirm Password"
                />
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

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2)),
  };
};

export default Register;
