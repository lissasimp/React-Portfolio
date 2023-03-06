// Must be rendered across every page component of the site

// Must contain a Navbar

//I think Social media should be an extension of the home page (was originally Learn)

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function NavTabs(props) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Lissa Simpson</Navbar.Brand>
        <Nav className="me-auto">
        {/*https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together*/}
        <Nav.Link
          as={NavLink} 
          to="home"
            onClick={() => ("Home")}
                      className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
           Home
          </Nav.Link>
          <Nav.Link
          as={NavLink} 
          to="about"
            onClick={() => ("About")}
                      className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </Nav.Link>

          <Nav.Link
          as={NavLink} 
          to="projects"
            onClick={() => ("Projects")}
            className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
          >
            Projects
          </Nav.Link>
          <Nav.Link
          as={NavLink} 
            to="contact"
            onClick={() => ("Projects")}
            className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavTabs;



