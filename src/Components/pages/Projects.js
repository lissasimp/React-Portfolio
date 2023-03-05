import React from "react";
import Card from 'react-bootstrap/Card';


//need a style file?

function ProjectCard(props) {
  return (
<div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} img alt={props.name}/>
      <Card.Body>
        <Card.Title></Card.Title> {props.name}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> {props.text}
        <Card.Link href="#">Deployed Site</Card.Link> {props.deployedLink}
        <Card.Link href="#">Github Repo</Card.Link> {props.githubRepo}
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectCard;

// return (
//   <Wrapper>
//     <Title>Friends List</Title>
//     {friends.map(function(buddy) {
//       return <FriendCard
//         key={buddy.id}
//         name={buddy.name + ", my pal"}
//         image={buddy.image}
//         occupation={buddy.occupation}
//         location={buddy.location}
//         doRemove={function() { removeFriend(buddy.id)} }
//       />
//     })}
//   </Wrapper>
// );