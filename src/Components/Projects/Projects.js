import React from "react";
import Card from "react-bootstrap/Card";
import projects from "./projects.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

import "./Projects.css";

function ProjectCard() {
  return (
        <div className="text-center">
      {/* <Row xs={4} md={3} className="g-3"> */}
      <Container style={{border:"solid 2px red"}}>
        <Row >
        {projects.map((props) => (
          <Col xs="4" >
          <Card.Body key={props.id} >
            <Card 
              style={{
                width: "22rem",
                height: "23rem",
                borderRadius: "20px",
                border: "solid 2px orange",
                marginTop: "2rem",
              }}
            >
              <Card.Header
                style={{
                  color: "orange",
                  fontWeight: "700",
                  fontSize: "1.6rem",
                }}
              >
                {props.name}
              </Card.Header>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + props.image}
                alt={props.name}
                className="imageProject"
                width="200px"
                height="250px"
                // style={{ borderRadius: "20px" }}
              />

              <Card.ImgOverlay>
                <Card.Text
                  style={{
                    marginTop: "7rem",
                    fontSize: "1rem",
                    fontWeight: "100",
                    backgroundColor: "black",
                  }}
                >
                  {props.text}
                </Card.Text>
              </Card.ImgOverlay>

              <Card.Footer>
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
              </Card.Footer>
            </Card>
          </Card.Body>
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  );
}

export default ProjectCard;
