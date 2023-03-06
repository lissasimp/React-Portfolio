import React from "react";
import Card from 'react-bootstrap/Card';
import projects from "../../projects.json"

function ProjectCard(props) {

  return (
    { projects.map((props) =>(
    <div>
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title> {props.name}
        <Card.Img variant="top" src={props.image} img alt={props.name}/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
        <Card.Link href="#">Deployed Site</Card.Link> {props.deployedLink}
        <Card.Link href="#">Github Repo</Card.Link> {props.githubRepo}
      </Card.Body>
</div>
)
  )}

)
}
  
export default ProjectCard;