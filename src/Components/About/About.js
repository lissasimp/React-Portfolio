import React from "react";
import profile from "../../Images/Profile.jpeg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../About/About.css";

function About() {
  return (
    <>
      <section
        className="homeContainer container-fluid align-items-center"
        style={{ marginTop: "6rem", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="about">
          <Container>
            <Row>
              <div className="col-sm-12 col-lg-5" style={{}}>
                <h2 style={{ fontSize: "3 rem" }}>Hi I'm </h2>
                <h1 className="homeTitle" style={{ fontSize: "5rem" }}>
                  <span style={{ color: "orange" }}>Lissa</span>
                </h1>
                <h2 style={{ fontSize: " 3rem" }}>Front End Developer </h2>
                {/* <p>I'm passionate about web design</p> */}
                <div className="btnContainer">
                  <Button
                    className="smBtn"
                    style={{ fontSize: "1.5rem" }}
                    href="https://twitter.com/LissaSimpson17"
                  >
                    <FaTwitter />
                  </Button>{" "}
                  <Button
                    className="smBtn"
                    style={{ fontSize: "1.5rem" }}
                    href="https://www.linkedin.com/in/lissasimpson/"
                  >
                    <FaLinkedin />
                  </Button>{" "}
                  <Button
                    className="smBtn"
                    style={{ fontSize: "1.5rem" }}
                    href="https://github.com/lissasimp"
                  >
                    <FaGithub />
                  </Button>{" "}
                  <Button
                    className="smBtn"
                    style={{ fontSize: "1.5rem" }}
                    href="https://drive.google.com/file/d/1n9tlM1LVApoJ7wnEuX_7APgFcE1vdPsk/view?usp=drive_link"
                  >
                    CV
                  </Button>{" "}
                </div>
              </div>

              <div className="col-sm-12 col-lg-6">
                <img
                  src={profile}
                  className="profileImg"
                  alt=""
                  width="300px"
                  height="300px"
                  // horizontalAlign="center"

                  style={{
                    height: "90%",
                    // justifyContent: "center",
                    borderRadius: "50px",
                    // filter: "grayscale(100%)",
                    marginRight: "4rem",
                    marginTop: "3rem",
                    marginBottom: "50px"
                  }}
                ></img>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default About;
