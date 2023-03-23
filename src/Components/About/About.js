import React from "react";
import profile from "../../Images/profile.PNG";

import Button from "react-bootstrap/Button";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../About/About.css";

function About() {
  return (
    <>
      <section className="homeContainer">
        <div className="row">
          <div className="col-sm-12 col-lg-5">
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
                href="https://www.linkedin.com/in/lissa-simpson-6b3864264/"
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
                href="https://drive.google.com/file/d/1TChKb2k7GjYA8hoscefSNP67YPI301lX/view?usp=share_link"
              >
                Resume
              </Button>{" "}
            </div>
          </div>

          <div className="col-sm-12 col-lg-6">
            <img
              src={profile}
              className="square"
              alt=""
              width="300px"
              height="300px"
              horizontalAlign="center"
              style={{
                height: "50%",
                justifyContent: "center",
                borderRadius: "50px",
                filter: "grayscale(100%)",
              }}
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
