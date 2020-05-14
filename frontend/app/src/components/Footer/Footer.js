import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container style={{marginTop:'2%'}}>
          <Row>
            <Col xs={12} md={7}>
              <h1>Footer will be here</h1>
            </Col>
            <Col xs={6} md={3}>
              <h2 style={{marginBottom:'8%'}}>site map</h2>
              <ul>
                  <li>
                      <a href="#">about us</a>  
                  </li>
                  <li>
                      <a href="#">blog</a>  
                  </li>
                  <li>
                      <a href="#">courses</a>  
                  </li>
                  <li>
                      <a href="#">faqs</a>  
                  </li>
                  <li>
                      <a href="#">terms and services</a>  
                  </li>
                  <li>
                      <a href="#">privacy policy</a>  
                  </li>
              </ul>
            </Col>
            <Col xs={6} md={2}>
              <h2>social links</h2>
              <ul>
                  <li>
                      <a href="#"></a>
                  </li>
              </ul>
            </Col>
          </Row>
          <hr />
        </Container>
      </div>
    );
  }
}
