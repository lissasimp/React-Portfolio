import React from "react";
import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Card";
// import Col from "react-bootstrap/Card";
import projects from "../../projects.json";

function ProjectCard(props) {
  return (
    <div>
      {projects.map((props) => (
        <Card.Body key={props.id}>
        <Card style={{ width: '18rem' }}>
        
          <Card.Title>{props.name}</Card.Title> 
          {/* <Card.Img variant="top" src={props.image} img alt={props.name} /> */}
          <Card.Text>
           {props.text}
          </Card.Text>
          <Card.Link href={props.deployedLink}>Deployed Site</Card.Link> 
          <Card.Link href={props.githubRepo}>Github Repo</Card.Link> 
          </Card>
        </Card.Body>
      ))}
    </div>
  );
  
}

      
export default ProjectCard;
