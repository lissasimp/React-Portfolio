import React from "react";
import Card from "react-bootstrap/Card";
import projects from "./projects.json";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Projects.css";

function ProjectCard() {
  return (
    <div className="cards text-center" style={{ marginLeft: "-120px" }}>
      <Row xs={4} md={3} className="g-3">
        {projects.map((props) => (
          <Card.Body key={props.id}>
            <Card
              className="bg-colour"
              style={{ width: "25rem", borderRadius: "20px", border: "none" }}
            >
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + props.image}

                alt={props.name}
                className="imageProject"
                width="240px"
                height="240px"
                style={{ borderRadius: "20px" }}
              />
              <Card.ImgOverlay>
                <Card.Title style={{ color: "black", fontWeight: "700" }}>
                  {props.name}
                </Card.Title>

                <Card.Text style={{  }}>{props.text}</Card.Text>
                <Button
                  className="projectButton"
                  variant="dark"
                  href={props.deployedLink}
                >
                  {" "}
                  Deployed Site{" "}
                </Button>{" "}
                <Button
                  className="projectButton"
                  variant="dark"
                  href={props.githubRepo}
                >
                  Github Repo
                </Button>{" "}
              </Card.ImgOverlay>
            </Card>
          </Card.Body>
        ))}
      </Row>
    </div>
  );
}

export default ProjectCard;
