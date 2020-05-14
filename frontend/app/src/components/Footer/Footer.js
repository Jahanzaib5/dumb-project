import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h1>Footer will be here</h1>
            </Col>
            <Col xs={6} md={4}>
              <h2>site map</h2>
              <ul>
                  <li>
                      about us
                  </li>
                  <li>
                      blogs
                  </li>
                  <li>
                      faqs
                  </li>
                  <li>
                      courses
                  </li>
                  <li>
                      terms and polices
                  </li>
                  <li>
                      privacy policy
                  </li>
              </ul>
            </Col>
            <Col xs={6} md={2}>
              <h1>Footer will be here</h1>
            </Col>
          </Row>
          <hr />
        </Container>
      </div>
    );
  }
}
