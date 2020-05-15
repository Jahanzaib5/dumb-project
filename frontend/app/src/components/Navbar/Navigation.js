import React, { Component } from "react";
import "./style.css";
import {
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import Logo from "./logo2.jpg";

class Navigation extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 20;
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
        <div className="container">
          <Navbar expand="lg" className="hello">
            <Navbar.Brand href="/"><Image style={{marginTop:'-13%', marginBottom:'-10%'}} src={Logo} height="50" width="70" alt="Picture"/></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Nav.Item className="nada">
                  <Nav.Link href="Aboutus">
                    <p>about-us</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nada">
                  <Nav.Link href="Courses">
                    <p>courses</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nada">
                  <Nav.Link href="#">
                    <p>login</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nada er">
                  <Nav.Link href="#">
                    <Button variant="outline-info">register</Button>{" "}
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
