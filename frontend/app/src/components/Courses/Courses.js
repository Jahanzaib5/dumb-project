import React, { Component } from "react";
import "./courses.css";
import { Container, Row, Col } from "reactstrap";
import { Card, Button, Modal } from "react-bootstrap";
import pic1 from "./1.jpg";
import pic2 from "./2.png";
import pic3 from "./3.jpg";
import pic4 from "./4.jpg";
import pic5 from "./5.jpg";
import pic6 from "./6.png";

export default class Courses extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <React.Fragment>
        <div className="course">
          <Modal
            style={{ textAlign: "center" }}
            show={this.state.show}
            onHide={this.handleClose}
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <h1 style={{color:"#46aaff", fontSize:'52.6', fontWeight:'525'}}>Login to the platform first!</h1>
            </Modal.Body>
            <Modal.Footer style={{ textAlign: "center" }}>
              <Button style={{backgroundColor:'#46aaff', color:"#fff", fontSize:'15px', border:'1px solid #46aaff'}} variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <Container className="course">
          <Row style={{ textAlign: "center" }}>
            <Col xs={12} md={12}>
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "0%",
                  marginBottom: "6%",
                }}
              >
                <g style={{ color: "#09216C" }}>courses</g>
                <br /> we offer to the students
              </h1>
            </Col>

            <Col xs={6} md={4}>
              <Card
                className="cards"
                style={{ width: "18rem", border: "2px solid #9fa19f" }}
              >
                <Card.Img
                  style={{ height: "150px", borderBottom: "1px solid #d2d4d2" }}
                  variant="top"
                  src={pic1}
                />
                <Card.Body>
                  <Card.Title>English</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={this.handleShow}>
                    learn more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card
                className="cards"
                style={{ width: "18rem", border: "2px solid #9fa19f" }}
              >
                <Card.Img
                  style={{ height: "150px", borderBottom: "1px solid #d2d4d2" }}
                  variant="top"
                  src={pic2}
                />
                <Card.Body>
                  <Card.Title>Math</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={this.handleShow}>
                    learn more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card
                className="cards"
                style={{ width: "18rem", border: "2px solid #9fa19f" }}
              >
                <Card.Img
                  style={{ height: "150px", borderBottom: "1px solid #d2d4d2" }}
                  variant="top"
                  src={pic3}
                />
                <Card.Body>
                  <Card.Title>Science</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={this.handleShow}>
                    learn more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row
            style={{ marginTop: "4%", marginBottom: "5%", textAlign: "center" }}
          >
            <Col xs={6} md={4}>
              <Card
                className="cards"
                style={{ width: "18rem", border: "2px solid #9fa19f" }}
              >
                <Card.Img
                  style={{ height: "150px", borderBottom: "1px solid #d2d4d2" }}
                  variant="top"
                  src={pic4}
                />
                <Card.Body>
                  <Card.Title>Exercise</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={this.handleShow}>
                    learn more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card
                className="cards"
                style={{ width: "18rem", border: "2px solid #9fa19f" }}
              >
                <Card.Img
                  style={{ height: "150px", borderBottom: "1px solid #d2d4d2" }}
                  variant="top"
                  src={pic5}
                />
                <Card.Body>
                  <Card.Title>Content writing</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={this.handleShow}>
                    learn more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card
                className="cards"
                style={{ width: "18rem", border: "2px solid #9fa19f" }}
              >
                <Card.Img
                  style={{ height: "150px", borderBottom: "1px solid #d2d4d2" }}
                  variant="top"
                  src={pic6}
                />
                <Card.Body>
                  <Card.Title>life skills</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={this.handleShow}>
                    learn more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
