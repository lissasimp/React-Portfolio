import React from "react";
import Card from 'react-bootstrap/Card';
// import Wrapper from "../../Components/wrapper";
// import projects from "../../projects.json"
//need a style file?

function ProjectCard(props) {
  return (
<div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} img alt={props.name}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title> {props.name}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
        <Card.Link href="#">Deployed Site</Card.Link> {props.deployedLink}
        <Card.Link href="#">Github REpo</Card.Link> {props.githubRepo}
      </Card.Body>
    </Card>

{/* <Wrapper>

  //{friends.map(function(f) {  alternative  - map runs this function on every element of array (friends.json)
  return (
    <ProjectCard
      key={f.id} //unique key prop - helps React to more efficiently manage data
      name={f.name}
      text={f.text}
      link={f.deployedLink}
      github={f.githubRepo}
      image={f.image}
    />
  );
})}
</Wrapper> */}
  </div>
  )
}

export default ProjectCard;