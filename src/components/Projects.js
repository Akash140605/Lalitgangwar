import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';
import a1 from '../img/a2.jpg';
import a from '../img/a.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Ultra-Wideband Patch Antenna Design",
      description:
        "Designed an antenna using a parasitic patch to improve bandwidth and radiation performance.",
      technologies: ["HFSS", "MATLAB", "Antenna Theory"],
      duration: "3 Months",
      roles: "Design Engineer, Researcher",
      image: a1, // Path for the image
    },
    {
      title: "Home Automation",
      description:
        "Used ESP32, Google Assistant, and Alexa to create voice-controlled smart devices.",
      technologies: ["ESP32", "Google Assistant API", "Alexa Skills"],
      duration: "2 Months",
      roles: "IoT Developer, System Integrator",
      image: a, // Path for the image
    },
    {
      title: "Sign Language to Speech Converter",
      description:
        "Converted sign language gestures to speech using Arduino Uno and flex sensors.",
      technologies: ["Arduino Uno", "Flex Sensors", "Speech API"],
      duration: "4 Months",
      roles: "Embedded Developer, Innovator",
      image: a1, // Path for the image
    },
  ];

  return (
    <section id="projects" className="projects-section bg-transparent container py-5">
      <header className="text-center mb-5">
        <motion.h1 
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Projects
        </motion.h1>
        <motion.p 
          className="subtitle lead"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Innovative Solutions for a Better Future
        </motion.p>
      </header>

      <div className="row">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="col-12 mb-5 d-flex flex-wrap align-items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className={`col-md-6 ${index % 2 === 0 ? "" : "order-md-2"}`}>
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded shadow-lg project-image"
              />
            </div>

            {/* Project Details */}
            <div className={`col-md-6 ${index % 2 === 0 ? "" : "order-md-1"}`}>
              <motion.div
                className="project-card p-4 bg-white rounded shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h5 className="project-title">{project.title}</h5>
                <p className="project-description">{project.description}</p>
                <ul className="project-details list-unstyled mt-3">
                  <li><strong>Technologies Used:</strong> {project.technologies.join(", ")}</li>
                  <li><strong>Duration:</strong> {project.duration}</li>
                  <li><strong>Roles:</strong> {project.roles}</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
