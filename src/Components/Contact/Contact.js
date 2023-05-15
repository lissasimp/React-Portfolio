import React from "react";
import Button from "react-bootstrap/Button";
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
    <body>
      <h2
        className="title-font font-semibold text-yellow text-center"
        style={{ padding: "10px" }}
      >
        We'd love to hear from you
      </h2>
      <p className="text-center">
        If you would like us to work with you on your next project,<br></br>
        please feel free to get in touch and tell us about what you’d like to
        achieve.
      </p>
      <div className="text-center">
        <p>
          <FaEnvelope style={{ color: "#1DA1F2" }} /> lissasimpsonid@gmail.com
        </p>
        <p>
          <FaPhone style={{ color: "#1DA1F2" }} /> +44 7717 824584
        </p>
        <p>
          <FaMap style={{ color: "#1DA1F2" }} /> Portsmouth, UK
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
              href="https://www.linkedin.com/in/lissa-simpson-6b3864264/"
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
            <Button
              className="smBtn"
              style={{ fontSize: "0.8rem" }}
              href="https://docs.google.com/document/d/1EgKTVT0Z_4mhRs85lii0TNUF2V9LvqKHbN5rqfiOEUs/edit?usp=sharing"
            >
              CV
            </Button>{" "}
          </div>
        </div>
        <p style={{ fontSize: "15px" }}>
          {" "}
          Or contact us using the form below and we'll get back to you asap
        </p>
      </div>
      <div
        className="justify content"
        style={{ display: "block", width: "80%", marginLeft: "75px" }}
      >
        <div className="form-group row">
          <div className="col-xs-4 ">
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="subject"
                placeholder="Subject"
                id="subject"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Message"
                id="message"
                required
              />
            </div>
            <Button
              variant="outline-primary"
              size="lg"
              style={{ marginBottom: "50px" }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Contact;
