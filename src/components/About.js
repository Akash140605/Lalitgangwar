import React, { useEffect, useState } from "react";
import "./About.css";
import img1 from "../img/l.png"; // Use your own image path

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
      className={`p-5 about-section ${isVisible ? "visible" : ""}`}
    >
      {/* Video Background */}
      <div className="video-background">
        <video
          src="path_to_your_video.mp4" // Replace with your video file path
          autoPlay
          loop
          muted
          className="video-bg"
        />
        <div className="overlay"></div>
      </div>

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
                  I am a final-year Electronics and Communication Engineering student with a strong passion for applying technical skills to solve real-world problems. I am particularly interested in areas like wireless communication, automation, and electronics design.
                </p>

                <p className="card-text text-justify">
                  In addition to my technical expertise, I have a deep interest in politics and the role of technology in governance and societal development. I aspire to grow professionally and contribute meaningfully to the industry, leveraging both my technical and interpersonal skills.
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
