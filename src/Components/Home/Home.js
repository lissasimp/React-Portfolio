import React from "react";
import profile from "../../Images/Profile.jpeg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <>
      <section className="section mt-5">
        <Container>
          <Row className="justify-content-center">
            <div class="col-md-6 ">
              <h2 style={{ fontSize: "3 rem" }}>Hi, I'm </h2>
              <h1 className="homeTitle" style={{ fontSize: "5rem" }}>
                <span style={{ color: "orange" }}>Lissa</span>
              </h1>
              <h2 style={{ fontSize: " 3rem" }}>Front End Developer </h2>
              {/* <p>I'm passionate about web design</p> */}
            </div>

            <div className="col-md-4 col-sm-2" style={{ marginTop: "4rem" }}>
              <img
                src={profile}
                className="img-fluid"
                alt=""
                width="400px"
                style={{
                  height: "90%",
                  borderRadius: "50px",
                  marginTop: "5px",
                  marginBottom: "6rem",
                }}
              ></img>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
