import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
          <h1>This will be the dashboard</h1>
          <br/>
          {
              this.props.isAuthenticated ?

              <button>Logout</button>

              :

              <button>Login</button>
          }
      
      </Container>
    );
  }
}
