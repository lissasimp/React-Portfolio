import React from "react";
import Card from "react-bootstrap/Card";

import projects from "./projects.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";


function ProjectCard() {
  return (
    <div>
      {/* <h2
        className="title-font font-semibold text-yellow text-center"
        style={{ padding: "10px" }}
      >
        My Projects
      </h2> */}
      {/* <Row xs={4} md={3} className="g-3"> */}
      <Container
        className="text-center"
        style={{ marginBottom: "5rem", marginTop: "2rem" }}
      >
        {/* <div className="cards"> */}
        <Row xs={1} md={2} lg={3} className="g-3 ">
          {projects.map((props) => (
            <Col className="">
              <Card.Body key={props.id}>
                <Card
                  style={{
                    width: "26rem",
                    height: "24rem",
                    borderRadiusTop: "20px",
                    border: "solid 4px orange",
                    marginTop: "2rem",
                    marginBottom: "0.5rem",
                    backgroundColor: "black",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card.Img
                    src={process.env.PUBLIC_URL + props.image}
                    alt={props.name}
                    className="imageProject img card-img-top"
                    width="200px"
                    height="360px"
                    style={{ borderTop: "20px" }}
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <Card.Title
                      style={{
                        color: "orange",
                        fontWeight: "700",
                        fontSize: "1.6rem",
                        margin: "0",
                      }}
                    >
                      {props.name}
                    </Card.Title>

                    <Card.Text
                      style={{
                        colour: "black",
                        // marginTop: "7rem",
                        fontSize: "1rem",
                        fontWeight: "400",
                        // marginTop: "7rem",
                        paddingLeft: "0.2rem",
                        paddingRight: "0.2rem",
                      }}
                    >
                      {props.text}
                    </Card.Text>

                    <div className="d-flex justify-content-center">
                      <Button
                        id="button1"
                        variant="dark"
                        href={props.deployedLink}
                        style={{
                          border: "solid 2px orange",
                          color: "#fff",
                          marginRight: "1rem",
                          position: "relative",
                        }}
                      >
                        {" "}
                        <FaGlobe />{" "}
                      </Button>{" "}
                      <Button
                        id="button2"
                        variant="dark"
                        href={props.githubRepo}
                        style={{
                          border: "solid 2px orange",
                          color: "#fff",
                          position: "relative",
                        }}
                      >
                        <FaGithub />
                      </Button>{" "}
                    </div>
                  </div>
                </Card>
              </Card.Body>
            </Col>
          ))}
        </Row>
        {/* </div> */}
      </Container>
    </div>
  );
}

export default ProjectCard;
