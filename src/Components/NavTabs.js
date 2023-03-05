// Must be rendered across every page component of the site

// Must contain a Navbar

//I think Social media should be an extension of the home page (was originally Learn)

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Lissa Simpson</Navbar.Brand>
        <Nav className="me-auto">
        {/*https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together*/}
          <Nav.Link
          as={NavLink} 
            to="about"
          >
            About
          </Nav.Link>

          <Nav.Link
          as={NavLink} 
            to="projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link
          as={NavLink} 
            to="contact"
          >
            Contact
          </Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
