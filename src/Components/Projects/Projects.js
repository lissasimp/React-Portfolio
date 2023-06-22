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
            <Card.Body key={props.id}>
              <Card
                className="d-flex flex-column"
                style={{
                  width: "26rem",
                  height: "26rem",
                  borderRadiusTop: "20px",
                  border: "solid 4px orange",

                  backgroundColor: "black",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="inner ">
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + props.image}
                    alt={props.name}
                    style={{ opacity: "0.3" }}
                    // className="imageProject img card-img-top "
                    // width="200px"
                    // height="360px"
                  />
                </div>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <Card.Title
                    style={{
                      color: "orange",
                      fontWeight: "700",
                      fontSize: "1.6rem",
                      marginBottom: "0.5rem",
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
                      paddingLeft: "0.2rem",
                      paddingRight: "0.2rem",
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
