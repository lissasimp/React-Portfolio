import React from "react";
import Card from "react-bootstrap/Card";
import projects from "../../projects.json";

function ProjectCard(props) {
  return (
    <div>
      {projects.map((props,key) => (
        <Card style={{ width: '18rem' }}>
        <Card.Body key={key}>
          <Card.Title>{props.name}</Card.Title> 
          <Card.Img variant="top" src={props.image} img alt={props.name} />
          <Card.Text>
           {props.text}
          </Card.Text>
          <Card.Link href="#">{props.deployedLink}</Card.Link> 
          <Card.Link href="#">{props.githubRepo}</Card.Link> 
        </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCard;
