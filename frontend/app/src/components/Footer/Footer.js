import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col xs={12} md={7} style={{marginTop:'3%'}}>
              <h1>need help choosing the right package?</h1>
              <h2 style={{ marginBottom: "5%" }}>contact us now!</h2>
              <p style={{ fontSize: "18px" }}>
                <FaMapMarkerAlt
                  style={{ marginRight: "1%", marginTop: "-1%" }}
                />
                310 Lenin Street Naryn, 722918 Kyrgyzstan
              </p>
              <p style={{ marginTop: "-2%" }}>
                <FaPhoneAlt /> +996-777 438 662
              </p>
              <p style={{ marginTop: "-2%" }}>
                <FaEnvelope /> dumb-2021@gmail.com
              </p>
            </Col>
            <Col xs={6} md={3} style={{marginTop:'4%'}}>
              <h2 style={{ marginBottom: "8%" }}>site map</h2>
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
            <Col xs={6} md={2} style={{marginTop:'4%'}}>
              <h2 style={{ marginBottom: "15%" }}>social links</h2>
              <ul className>
                <li style={{ marginBottom: "15%" }}>
                  <a href="#">
                    <FaInstagram size="2rem" />
                  </a>
                </li>
                <li style={{ marginBottom: "15%" }}>
                  <a href="#">
                    <FaFacebook size="2rem" />
                  </a>
                </li>
                <li style={{ marginBottom: "15%" }}>
                  <a href="#">
                    <FaTwitter size="2rem" />
                  </a>
                </li>
                <li style={{ marginBottom: "15%" }}>
                  <a href="">
                    <FaYoutube size="2rem" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row className="last-one">
            <Col xs={12} md={12} style={{textAlign:'center', marginTop:'1%', marginBottom:'1%'}}>
              <p style={{fontSize:'15px', color:'#fff'}}>power and designed by d.u.m.b project | all rights reserverd &copy; 2020</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
