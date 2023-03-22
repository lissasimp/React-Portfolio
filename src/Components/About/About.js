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
                href="https://www.linkedin.com/in/lissa-simpson-5004a3111/"
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
            </div>
          </div>

          <div className="col-sm-12 col-lg-6">
            <img
              src={profile}
              className="square"
              alt=""
              width="340px"
              height="340px"
              horizontalAlign="center"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
