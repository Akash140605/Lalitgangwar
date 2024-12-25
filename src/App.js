import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import "./App.css";

function App() {
  return (
    <>
     
   
                <Navbar />
    
          <section id="about">
            <About />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="skill">
            <Skill />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="experience">
          <Footer />
          </section>
      {/* Footer */}
      
    </>
  );
}

export default App;
