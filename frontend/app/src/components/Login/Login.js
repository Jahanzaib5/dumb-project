import React, { Component } from "react";
import "./login.css";
import { Nav, Image } from "react-bootstrap";
import Img from "./img1.png";
import { Button } from "react-bootstrap";

class logIn extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName, values.password);
        this.props.history.push("/");
      }
    });
  };
  render() {
    return (
      <div className="container split">
        <div className="box1 left">
          <div className="centerL" id="left">
            <div>
              <p style={{ fontSize: "30px", fontWeight: "large" }}>
                Good to see you're back!
              </p>
              <p style={{ fontSize: "20px" }}>Login to enter your study mode</p>
            </div>
            <div style={{ color: "blueviolet" }}>
              <form action="" onSubmit={this.handleSubmit}>
                <div id="inputs">
                  <input
                    type="text"
                    placeholder="userName"
                    name="userName"
                    required
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>
                <div id="submit">
                  <Button
                    variant="outline-info"
                    htmlType="submit"
                    type="submit"
                  >
                    Login
                  </Button>{" "}
                  <Nav.Link href="#ForgotPassword">Forgot Password?</Nav.Link>
                </div>
              </form>
            </div>
            <div>
              <p style={{ display: "flex", alignItems: "baseline" }}>
                Don't have an account?
                <Nav.Link href="Register">Sign up</Nav.Link>
              </p>
            </div>
          </div>
        </div>
        <div className="box2 right">
          <div class="centerR" id="right">
            <Image src={Img} alt="photo" style={{ maxWidth: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default logIn;
