import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMap } from "react-icons/fa";

// import "./Contact.css"
// import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <Container id="contactBox">
    <body>
      <h2
        className="title-font font-semibold text-yellow text-center"
        style={{ padding: "10px" }}
      >
        We'd love to hear from you
      </h2>
      <p className="text-center">
        If you would like us to work with you on your next project, please feel free to get in touch and tell us about what you’d like to achieve.
      </p>
      <div className="text-center">
        <p>
          <FaEnvelope style={{ color: "#1DA1F2", marginRight: "10px" }} /> 
          <a onClick="javascript:window.open('mailto:lissasimpsonid@gmail.com', 'mail');event.preventDefault()" href="mailto:lissasimpsonid@gmail.com">lissasimpsonid@gmail.com</a>
        </p>
        <p>
          <FaPhone style={{ color: "#1DA1F2", marginRight: "10px" }} />
          <Link to="tel:07717824584">Call Me</Link>
        </p>
        <p>
          <FaMap style={{ color: "#1DA1F2" }} /> Portsmouth, UK
        </p>

        <p className="text-center">
       Or connect with us:
      </p>

        <div className="btnContainer" style={{ padding: "10px" }}>
          <div className="col-md-12 text-center">
            <Button
              className="contactBtn"
              style={{ fontSize: "0.5rem", marginRight: "2rem" }}
              href="https://twitter.com/LissaSimpson17"
            >
              <FaTwitter style={{ fontSize: "1rem" }} />
            </Button>{" "}
            <Button
              className="contactBtn"
              style={{ fontSize: "0.5rem", marginRight: "2rem" }}
              href="https://www.linkedin.com/in/lissasimpson/"
            >
              <FaLinkedin style={{ fontSize: "1rem" }} />
            </Button>{" "}
            <Button
              className="contactBtn"
              style={{ fontSize: "0.5rem", marginRight: "2rem" }}
              href="https://github.com/lissasimp"
            >
              <FaGithub style={{ fontSize: "1rem" }} />
            </Button>{" "}
          </div>
        </div>
        </div>
    </body>
    </Container>
  );
}

export default Contact;
