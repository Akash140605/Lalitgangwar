import React, { useEffect, useState } from "react";
import "./About.css";
import pu from "../img/pu.mp4"; // Video file path
import img1 from "../img/l.png"; // Image file path

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 150) {
          setIsVisible(true);
        }
      }
    };

    // Adding debounce to optimize scroll events
    const debounce = (func, delay) => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
      };
    };

    const debouncedScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debouncedScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  return (
    <section
      id="about"
      className={`about-section p-5 ${isVisible ? "visible" : ""}`}
    >
      {/* Video Background */}
      <div className="video-background">
        <video src={pu} autoPlay loop muted className="background-video" />
        <div className="overlay"></div>
      </div>

      {/* Content */}
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Profile Image */}
          <div className="col-md-5 mb-4">
            <div className={`about-image-wrapper ${isVisible ? "visible" : ""}`}>
              <img
                src={img1}
                alt="Profile"
                className="about-image img-fluid rounded-circle shadow-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="col-md-7">
            <div className={`card about-card ${isVisible ? "visible" : ""}`}>
              <div className="card-body">
                <h2 className="card-title">About Me</h2>
                <p className="card-text">
                  I am a final-year Electronics and Communication Engineering student with a strong passion for applying technical skills to solve real-world problems. My interests include wireless communication, automation, and electronics design.
                </p>
                <p className="card-text">
                  I am also deeply interested in the intersection of politics and technology. My goal is to leverage my technical expertise and interpersonal skills to contribute meaningfully to both industry and society.
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
