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
    
    <div className="text-center">
      <h2
        className="title-font font-semibold text-yellow text-center"
        style={{ padding: "10px" }}
      >
        My Projects
      </h2>
      {/* <Row xs={4} md={3} className="g-3"> */}
      <Container style={{ marginBottom:"5rem"}}>
        {/* <div className="cards"> */}
        <Row xs={1} md={2} lg={3} className="g-3" >
          {projects.map((props) => (
            <Col className="container-fluid">
              <Card.Body key={props.id}>
                <Card
                  style={{
                    width: "22rem",
                    height: "23rem",
                    borderRadiusTop: "20px",
                    border: "solid 4px orange",
                    marginTop: "2rem",
                    marginBottom: "0.5rem",
                    backgroundColor: "black",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + props.image}
                    alt={props.name}
                    className="imageProject"
                    width="200px"
                    height="220px"
                    style={{ borderTop: "20px" }}
                  />
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
                      marginBottom: "0.5rem",
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
