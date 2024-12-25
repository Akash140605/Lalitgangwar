import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      title: "Ultra-Wideband Patch Antenna Design",
      description:
        "Designed an antenna using a parasitic patch to improve bandwidth and radiation performance.",
      image: "https://via.placeholder.com/500x300", // Add the actual path for the image
    },
    {
      title: "Home Automation",
      description:
        "Used ESP32, Google Assistant, and Alexa to create voice-controlled smart devices.",
      image: "https://via.placeholder.com/500x300", // Add the actual path for the image
    },
    {
      title: "Sign Language to Speech Converter",
      description:
        "Converted sign language gestures to speech using Arduino Uno and flex sensors.",
      image: "https://via.placeholder.com/500x300", // Add the actual path for the image
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Projects</h1>
        <p className="subtitle lead">
          Innovative Solutions for a Better Future
        </p>
      </header>

      <div className="row">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`col-12 mb-4 d-flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Left Side Image or Placeholder */}
            <div className="project-media col-md-6">
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Side Text Card */}
            <div className="project-card mr-3 col-md-6 p-3 bg-light rounded shadow-sm">
              <h5 className="project-title">{project.title}</h5>
              <p className="project-description">{project.description}</p>
            </div>
          </motion.div>
          
        ))}
      </div>
    </section>
  );
};

export default Projects;
