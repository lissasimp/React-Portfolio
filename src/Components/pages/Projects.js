import React from "react";
import Card from "react-bootstrap/Card";
import projects from "../../projects.json";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectCard() {
  return (
    <div>
      <Row xs={4} md={3} className="g-3">
      {projects.map((props) => (
        <Col>
        <Card.Body key={props.id}>
        <Card style={{ width: '25rem' }}>
        
          <Card.Title>{props.name}</Card.Title> 
          <Card.Img variant="top" src={process.env.PUBLIC_URL + props.image} alt ={props.name} />
          <Card.Text>
           {props.text}
          </Card.Text>
          <Card.Link href={props.deployedLink}>Deployed Site</Card.Link> 
          <Card.Link href={props.githubRepo}>Github Repo</Card.Link> 
          </Card>
        </Card.Body>
        </Col>
      ))}
      
      </Row>
    </div>
  );
}



export default ProjectCard;
