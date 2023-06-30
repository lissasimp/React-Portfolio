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
        <div>
          <h2
            className="title-font font-semibold text-yellow text-center"
            style={{ paddingTop: "50px", fontSize: "40px" }}
          >
            We'd love to hear from you!
          </h2>
          <p style={{ padding: "40px", fontSize: "30px", textAlign: "center" }}>
            If you would like us to work with you on your next project, please
            get in touch and tell us about what you’d like to achieve.
          </p>
          <div className="text-center">
            <p style={{ fontSize: "25px" }}>
              <FaEnvelope style={{ color: "#1DA1F2", marginRight: "10px" }} />
              <a
                onClick="javascript:window.open('mailto:lissasimpsonid@gmail.com', 'mail');event.preventDefault()"
                href="mailto:lissasimpsonid@gmail.com"
              >
                lissasimpsonid@gmail.com
              </a>
            </p>
            <p style={{ fontSize: "25px" }}>
              <FaPhone style={{ color: "#1DA1F2", marginRight: "10px" }} />
              <Link to="tel:07717824584">Call Me</Link>
            </p>
            <p style={{ fontSize: "25px" }}>
              <FaMap
                style={{
                  color: "#1DA1F2",
                  marginRight: "10px",
                  fontSize: "40px",
                }}
              />{" "}
              Portsmouth, UK
            </p>

            <p
              className="text-center"
              style={{ fontSize: "25px", paddingTop: "30px" }}
            >
              Or connect with us:
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              marginBottom: "100px",
            }}
          >
            <Button
              className="contactBtn"
              style={{ marginRight: "1rem" }}
              href="https://twitter.com/LissaSimpson17"
            >
              <FaTwitter style={{ fontSize: "3rem" }} />
            </Button>{" "}
            <Button
              className="contactBtn"
              style={{ marginRight: "1rem" }}
              href="https://www.linkedin.com/in/lissasimpson/"
            >
              <FaLinkedin style={{ fontSize: "3rem" }} />
            </Button>{" "}
            <Button
              className="contactBtn"
              style={{ marginRight: "1rem" }}
              href="https://github.com/lissasimp"
            >
              <FaGithub style={{ fontSize: "3rem" }} />
            </Button>{" "}
          </div>
        </div>
      </body>
    </Container>
  );
}

export default Contact;
