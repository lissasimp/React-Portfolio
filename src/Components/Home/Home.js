// Possibly put this on home page?
// A good portfolio includes updated skills information and links to your web presence. You should update the following social media accounts as well:

// LinkedIn
// Make sure to update your LinkedIn Profile with the new skills you've acquired since the last time it was updated.

// If you do not have a LinkedIn profile, please create one.

// GitHub
// Update your GitHub profile with pinned repositories featuring those same projects.

import React from "react";
import "./Home.css";
import profile from "../../Images/profile.PNG";

function Home() {
  return (
    <>
    <section className="homeContainer">
        <div className="row">
            <div className="col-sm-12 col-lg-5">
      <h2 style={{ fontSize: "3 rem" }}>Hi I'm </h2>
      <h1 className="homeTitle"style={{ fontSize: "5rem" }}>
        <span style={{ color: "orange" }}>Lissa</span>
      </h1>
      <h2 style={{ fontSize: " 3rem" }}>Front End Developer </h2>
      {/* <p>I'm passionate about web design</p> */}
      </div>

      <div className="col-sm-12 col-lg-6">
      <img
        src={profile}
        className="square"
        alt=""
        width="340px"
        height="340px"
        horizontalAlign= "center"
      ></img>
      </div>
    </div>
    </section>
    </>
  );
}

export default Home;
