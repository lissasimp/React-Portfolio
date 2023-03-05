// Must be rendered across every page component of the site

// Must contain a Navbar

//I think Social media should be an extension of the home page (was originally Learn)

// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { NavLink } from 'react-router-dom';

// function NavTabs(props) {
//   return (
//     <Navbar bg="light" variant="light">
//       <Container>
//         <Navbar.Brand as={NavLink} to="/">Lissa Simpson</Navbar.Brand>
//         <Nav className="me-auto">
//         {/*https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together*/}
//           <Nav.Link
//           as={NavLink} 
//             to="about"
//           >
//             About
//           </Nav.Link>

//           <Nav.Link
//           as={NavLink} 
//             to="projects"
//           >
//             Projects
//           </Nav.Link>
//           <Nav.Link
//           as={NavLink} 
//             to="contact"
//           >
//             Contact
//           </Nav.Link>

//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavTabs;

import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => props.handlePageChange("Projects")}
          className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;

