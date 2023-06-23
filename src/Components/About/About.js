import React from "react";
import profile from "../../Images/Profile.jpeg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import "../About/About.css";

function About() {
  return (
    <>
      <section className="section mt-5" style={{marginBottom: "50px"}}>
        <Container>
          <Row className="justify-content-md-center">
            <div class="col-md-4 ">
              <img
                alt="profile"
                className="img-fluid"
                src={profile}
                style={{
                  height: "90%",
                  borderRadius: "50px",
                  marginTop: "3rem",
                  marginBottom: "50px",
                }}
              />
            </div>
            <div class="col-md-6 col-lg-6 ml-auto d-flex justify-content-md-center mt-4 mt-md-0">
              <div>
                <h1 className="homeTitle" style={{ fontSize: "3rem" }}>
                  <span style={{ color: "orange" }}>Lissa Simpson</span>
                </h1>
                <h2 style={{ fontSize: " 2rem" }}>Front End Developer </h2>
                <p style={{ fontSize: " 1rem", textAlign: "justify" }}>
                  I am a passionate junior front-end developer with a drive to
                  create engaging and user-friendly web experiences. My
                  motivation as a professional stems from my love for coding and
                  the satisfaction I gain from turning ideas into tangible
                  digital solutions. In each project, I aim to deliver
                  high-quality front-end development that not only meets the
                  client's requirements but also exceeds user expectations by
                  creating intuitive and visually appealing interfaces. I am
                  fueled by the opportunity to solve problems creatively and
                  enjoy analyzing complex challenges to implement innovative
                  solutions. As a junior front-end developer, my end goal is to
                  contribute to projects that have a positive impact on users'
                  lives, whether it's improving accessibility, enhancing
                  productivity, or providing innovative solutions to real-world
                  problems.{" "}
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
