import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavTabs.css";
import CSS from "../../Images/css.png";
import HTML from "../../Images/html.png";
import JS from "../../Images/js.png";
import Node from "../../Images/Node.png";
import ReactImg from "../../Images/React.png";

function NavTabs(props) {
  return (
    <Navbar id="navbar" variant="dark" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="ml-auto"></Nav> */}
        <Container>
          {/* <Nav className="me-auto"> */}
          <Navbar.Brand as={NavLink} to="/" id="myname">
            Lissa Simpson
            <img src={JS} width="40px" height="40px" alt="JS logo"></img>
            <img src={HTML} width="40px" height="40px" alt="HTML logo"></img>
            <img src={CSS} width="40px" height="40px" alt="CSS logo"></img>
            <img src={ReactImg} width="50px" height="50px" alt="React logo"></img>
            <img src={Node} width="50px" height="50px" alt="Node logo"></img>
          </Navbar.Brand>

          {/*https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together*/}
          <section>
            <Nav className="ml-auto"></Nav>
            <Nav.Link
              id="links"
              as={NavLink}
              to="contact"
              onClick={() => "Projects"}
              className={
                props.currentPage === "Projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Nav.Link>

            <Nav.Link
              id="links"
              as={NavLink}
              to="projects"
              onClick={() => "Projects"}
              className={
                props.currentPage === "Projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Nav.Link>

            <Nav.Link
              id="links"
              as={NavLink}
              to="about"
              onClick={() => "about"}
              className={
                props.currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Nav.Link>
          </section>
          {/* </Nav> */}
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
