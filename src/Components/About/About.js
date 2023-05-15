import React from "react";
import profile from "../../Images/Profile.jpeg";

import Button from "react-bootstrap/Button";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../About/About.css";

function About() {
  return (
    <>
      <section className="homeContainer container-fluid align-items-center" style={{marginTop:"5rem"}}>
        <div className="row">
          <div className="col-sm-12 col-lg-5" style={{marginLeft:"-2rem"}}>
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
                href="https://docs.google.com/document/d/1EgKTVT0Z_4mhRs85lii0TNUF2V9LvqKHbN5rqfiOEUs/edit?usp=sharing"
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
              horizontalAlign="center"
             
              style={{
                height: "90%",
                justifyContent: "center",
                borderRadius: "50px",
                // filter: "grayscale(100%)",
                marginRight:"4rem",
                marginTop:"3rem"
              }}
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
