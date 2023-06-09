import React from "react";
import { Route, Routes } from "react-router-dom";

import NavTabs from "./Components/NavTabs/NavTabs";
// import Home from "./Components/About/About";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";




import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  
  return (
    <div className="background">
      <NavTabs />
      
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;
