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
    <div className="mx-auto align-items-center">
      <Container
        className="text-center"
        style={{ marginBottom: "5rem", marginTop: "2rem" }}
      >
        <Row
          xs={1}
          md={2}
          lg={3}
          className="g-3"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          {projects.map((props) => (
            <Card.Body key={props.id}>
              <Card
                className="d-flex flex-column"
                style={{
                  width: "24rem",
                  height: "24rem",
                  borderRadiusTop: "20px",
                  border: "solid 4px orange",
                  backgroundColor: "black",
                }}
              >
                <div className="my-auto">
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + props.image}
                    alt={props.name}
                    style={{ opacity: "0.3" }}
                  />
                </div>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <Card.Title
                    style={{
                      color: "orange",
                      fontWeight: "700",
                      fontSize: "1.8rem",
                      marginBottom: "1.5rem",
                      marginTop: "7rem",
                    }}
                  >
                    {props.name}
                  </Card.Title>

                  <Card.Text
                    style={{
                      colour: "black",
                      fontSize: "1rem",
                      fontWeight: "400",
                    }}
                  >
                    {props.text}
                  </Card.Text>
                  <div className="d-flex flex-row justify-content-center mt-auto">
                    <Button
                      id="button1"
                      variant="dark"
                      href={props.deployedLink}
                      style={{
                        border: "solid 2px orange",
                        color: "#fff",
                        marginRight: "1rem",
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
                      }}
                    >
                      <FaGithub />
                    </Button>{" "}
                  </div>
                </div>
              </Card>
            </Card.Body>
          ))}
        </Row>
        {/* </div> */}
      </Container>
    </div>
  );
}

export default ProjectCard;
