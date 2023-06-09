import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";



function NavTabs(props) {
  return (
    <Navbar id="navbar" variant="dark" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Container fluid>
          {/* <Nav className="me-auto"> */}
          <Navbar.Brand as={NavLink} to="/" id="myname">
            Lissa Simpson
          
          </Navbar.Brand>

          {/*https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together*/}
          <section>
            <Nav className="justify-content-end">
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
            </Nav>
          </section>
          
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
