import React from "react";
import Card from 'react-bootstrap/Card';


//need a style file?

function ProjectCard(props) {
  return (
<div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} alt={props.name}/>
      <Card.Body>
        <Card.Title></Card.Title> {props.name}
        <Card.Text>
        </Card.Text> {props.text}
        <Card.Link href="#">Deployed Site</Card.Link> {props.deployedLink}
        <Card.Link href="#">Github Repo</Card.Link> {props.githubRepo}
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectCard;

