import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Pic1 from './pic1.JPG';
import Image from "react-bootstrap/Image";
import './first.css';


export default class LearMore extends Component {
  render() {
    return (
      <Container className='container' style={{ border: "1px solid red", marginTop:'4%'}}>
        <Row>
          <Col xs={12} md={6}>
            <h1 style={{color:'#09216C', marginTop:'12%'}}>about</h1>
            <h1 style={{color:'#2699fb', fontSize:"45px", marginTop:'-2%'}}>D.U.M.B Project 2020</h1>
            <p>
              DUMB is a project with vast directions mainly focused on
              individual’s self-development. Our team consists of highly
              motivated members who do their best. We work with directions which
              help people to upgrade themselves in various spheres.
              Our slogan
              is our name – Drive Ur Mind Bravely, there is always something
              that you do not know.
            </p>
          </Col>
          <Col xs={12} md={6}>
          <Image src={Pic1} height="480" alt="Picture" />
          </Col>
        </Row>
      </Container>
    );
  }
}
