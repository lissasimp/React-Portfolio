import React from "react";
import CSS from "../../Images/css.png";
import HTML from "../../Images/html.png";
import JS from "../../Images/js.png";
import Node from "../../Images/Node.png";
import ReactImg from "../../Images/React.png";


function Footer () {

  return (
  <footer>
      <div class="container text-center">
      <img id="logo" src={JS} width="30px" height="30px" alt="JS logo"></img>
            <img id="logo"src={HTML} width="30px" height="30px" alt="HTML logo"></img>
            <img id="logo"src={CSS} width="30px" height="30px" alt="CSS logo"></img>
            <img id="logo"src={ReactImg} width="40px" height="40px" alt="React logo"></img>
            <img id="logo"src={Node} width="40px" height="40px" alt="Node logo"></img>
            </div>
  </footer>
  )
};

export default Footer;

