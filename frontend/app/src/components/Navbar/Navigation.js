import React, { Component } from "react";
import "./style.css";
import {
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

class Navigation extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 38;
      //console.log(window.scrollY);
      //console.log(isTop);
      const nav = document.getElementById("nav");
      const hide = document.getElementById("hide");
      if (isTop) {
        nav.classList.add("scrolled");
        hide.classList.add("hidden");
      } else {
        nav.classList.remove("scrolled");
        hide.classList.remove("hidden");
      }
    });
  }

  componentWillUnount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div className="hooman" id="nav">
        <div className="hide" id="hide">
          
          <p><FontAwesomeIcon icon={faPhone} />  +996-777 438 662</p>
        </div>
        <div className="container" style={{border:'1px solid red'}}>
          <Navbar expand="lg" className="hello">
            <Navbar.Brand href="#home">Logo Here</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Nav.Item className="nada">
                  <Nav.Link href="Aboutus">
                    <p>AboutUs</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nada">
                  <Nav.Link href="#">
                    <p>Courses</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nada">
                  <Nav.Link href="#">
                    <p>Login</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nada er">
                  <Nav.Link href="#">
                    <Button variant="outline-info">Register</Button>{" "}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Navigation;
