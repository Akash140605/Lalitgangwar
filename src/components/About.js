import React, { useEffect, useState } from "react";
import "./About.css";
import img1 from "../img/l.png"; // Use your own image path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Handle visibility of the section
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 150) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className={`p-5 bg-light about-section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          {/* Profile Image Card */}
          <div className="col-md-5 mb-4">
            <div
              className={`about-image-wrapper ${isVisible ? "visible" : ""}`}
            >
              <img
                src={img1}
                alt="Profile"
                className="about-image img-fluid rounded-circle shadow-lg"
              />
            </div>
          </div>

          {/* Text Content Card */}
          <div className="col-md-7">
            <div
              className={`card about-card text-card ${isVisible ? "visible" : ""}`}
            >
              <div className="card-body">
                <h2 className="card-title">About Me</h2>
                <p className="card-text text-justify">
                  I am a final-year student pursuing Electronics and Communication Engineering (ECE), with a strong foundation in core subjects such as Digital Signal Processing, Embedded Systems, Microprocessors and Microcontrollers, Communication Systems, and VLSI Design. I have hands-on experience with tools and technologies like MATLAB, Verilog, PCB design, and IoT systems.
                </p>

                <p className="card-text text-justify">
                  I am passionate about applying my technical skills to solve real-world problems, particularly in areas like wireless communication, automation, and electronics design. My academic and practical experiences have equipped me with analytical thinking, problem-solving skills, and a collaborative approach to projects.
                </p>

                <p className="card-text text-justify">
                  In addition to my technical expertise, I have a profound interest in politics, exploring the role of technology in governance and societal development. I aspire to grow professionally, leveraging my technical and interpersonal skills to contribute meaningfully to the industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card contact-card p-3">
              <h3>Contact Information</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/your-profile-link" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="mr-3" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/your-x-handle" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faTwitter} size="lg" className="mr-3" />
                    X (formerly Twitter)
                  </a>
                </li>
                <li>
                  <a href="lalitgangwar04@gmail.com" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-3" />
                    Email
                  </a>
                </li>
                <li>
                  <a href="tel:91 73513 63836" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPhone} size="lg" className="mr-3" />
                    Contact Number
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
