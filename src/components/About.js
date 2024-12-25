import React, { useEffect, useState } from "react";
import "./About.css";
import img1 from "../img/l.png"; // Use your own image path

const About = () => {
  const [isVisible, setIsVisible] = useState(true); // Set initially to true for page load animation

  // Handle visibility of the section
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 150) {
        setIsVisible(true); // Set true when section enters the viewport
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on component mount to trigger animation on initial page load

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
                  My goal is to become associated with a company where I can
                  utilize my skills and gain further experience while enhancing
                  the company’s productivity and reputation.
                </p>
                <p className="card-text">
                  I am passionate about software development and enjoy solving
                  real-world problems through technology. I thrive in collaborative
                  environments and am always eager to learn new tools and techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
