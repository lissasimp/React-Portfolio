// Must be rendered across every page component of the site

// Must contain a Navbar

//I think Social media should be an extension of the home page (was originally Learn)

import React from 'react';
//useMatch allows to comparethe path e are currently on to another - using 'to' property
//useResolvedPath takes relative or absolute path and combines it with the current path you are on and gives you full path you are accessing
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function NavTabs() {
  return (
    <nav className="nav" >
        <Link
          to="/"
          className="site-title">
          Lissa Simpson
          </Link>
  
     <ul>
      
        <CustomLink
          to="/about"
          className="nav-item">
            About
        </CustomLink>
        <CustomLink
          to="/projects"
          className="nav-item">
            Project
        </CustomLink>
        <CustomLink
          to="/contact"
          className="nav-item">
            Contact
        </CustomLink>
        <CustomLink
          to="/social media"
          className="nav-item">
            Social Media
        </CustomLink>
        </ul>
        </nav>
  )}
      
function CustomLink ({ to, children, ...props}) {
  const resolvedPath = useResolvedPath(to) //to is the URL we are passing to
  const isActive = useMatch({ path: resolvedPath.pathname, end: true}) //end true means the entire path must match(not a partial match)

  return (
    <li className = {isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}