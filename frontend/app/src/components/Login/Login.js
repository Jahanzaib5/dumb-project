import React, { Component } from "react";
import "./login.css";
import { Nav, Image } from "react-bootstrap";
import Img from "./img1.png";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { Form, Icon, Input } from "antd";
import * as actions from "../../store/actions/auth";
import { connect } from "react-redux";
import { Router } from "react-router-dom";

class logIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let url = "http://http://127.0.0.1:5000/rest-auth/login/";

    var data = new FormData();
    data.append("identity", this.state.username);
    data.append("password", this.state.password);

    this.props.onAuth(this.state.username, this.state.password);
    this.props.history.push("/Dashboard");
  };

  /*fetch(url, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        data = JSON.parse(data);
        if (data.status === 1) {
          Router.push("./Dashboard");
        } else {
          this.setState({ error: data.message });
        }
      })
      .catch((error) => {
        console.error("Error", error);
        alert("Login failed");
      });
  };*/

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <h1>{this.props.error.message}</h1>;
    }

    return (
      <React.Fragment>
        <div style={{textAlign:'center'}}>{errorMessage }</div>
        <div className="container split">
          {this.props.loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <div className="box1 left">
              <div className="centerL" id="left">
                <div>
                  <p style={{ fontSize: "30px", fontWeight: "large" }}>
                    Good to see you're back!
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Login to enter your study mode
                  </p>
                </div>
                <div style={{ color: "blueviolet" }}>
                  <form action="" onSubmit={this.handleSubmit}>
                    <div id="inputs">
                      <input
                        type="text"
                        placeholder="user Name"
                        name="username"
                        onChange={this.handleChange}
                        required
                      />

                      <br />
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
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
                      <Nav.Link href="#ForgotPassword">
                        Forgot Password?
                      </Nav.Link>
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
          )}
          <div className="box2 right">
            <div class="centerR" id="right">
              <Image src={Img} alt="photo" style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>
      </React.Fragment>
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
  console.log("calling auth function");
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(logIn);
