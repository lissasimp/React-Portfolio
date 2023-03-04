// import React from 'react';
import NavTabs from './Components/NavTabs';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Projects from './Components/pages/Projects';
import Contact from './Components/pages/Contact';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <NavTabs />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* Define a route that will have descendant routes */}
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
    </div>
    </>
  );
}
export default App;

//Your portfolio must meet the following requirements:

// The following technologies must be used:

// React

// Navigation using React Router, dynamic rendering, or another third part router

// Your portfolio must contain the following information:

// Your name

// Links to your:

// GitHub profile

// LinkedIn page

// Email address

// Phone number (optional)

// CV (in PDF format)

// Your CV must contain up-to-date projects and professional experience
// A list of projects (Challenges or Projects). For each project, make sure you have the following:

// Project title

// Link to the deployed version

// Link to the GitHub repository

// GIF or screenshot of the deployed application

// Required Components
// At a minimum, your portfolio must render these 6 components:

// App

// Header

// Home page

// Projects page

// Project (on Projects page)

// Contact page

// Component Content and Requirements
// Each of the following components must follow these guidelines:

// App:

// Must be your top-level component and render all necessary child components
// Header:

// Must be rendered across every page component of the site

// Must contain a Navbar

// Home page:

// This should be a welcome landing page that contains:

// Your Name

// A headshot of you (or an avatar)

// Your brand statement

// Some indication that this is your portfolio site

// Projects page:

// Must render six instances of the Project component dynamically

// Be sure to store your project details data in a JSON file and import it into your project

// Project:

// Must be a reusable component that ingests JSON data as props and renders a single instance for each project

// Must utilize Router props to properly render the right project based on user selection

// Must render the following info:

// Project title

// Link to the deployed version

// Link to the GitHub repository

// GIF or screenshot of the deployed application

// Contact page:

// Must include contact information:

// Email address

// Link to a PDF version of your CV

// Link to your GitHub profile

// Link to your LinkedIn page

// Must have a contact form for handling events

// Updated Social Media Presence
// A good portfolio includes updated skills information and links to your web presence. You should update the following social media accounts as well:

// LinkedIn
// Make sure to update your LinkedIn Profile with the new skills you've acquired since the last time it was updated.

// If you do not have a LinkedIn profile, please create one.

// GitHub
// Update your GitHub profile with pinned repositories featuring those same projects.



