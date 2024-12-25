import React, { useState, useEffect } from "react";
import "./Education.css"; // Assuming you have a separate CSS file
import portraitImg from "../img/portrait.jpg"; // Replace with the actual path to your image

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const educationSection = document.getElementById("education");
      const rect = educationSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="education" className="p-5 education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className={`row align-items-center ${isVisible ? "visible" : ""}`}>
          {/* Education Content - Left Side */}
          <div className="col-md-8">
            <div className="card education-card">
              <div className="card-body">
                <h3 className="card-title">Education Details</h3>
                <div className="education-details">
                  <div className="education-item">
                    <h4>M.J.P. Rohilkhand University, Bareilly</h4>
                    <p>B.Tech in Electronics & Communication Engineering</p>
                    <p>CGPA: 7.50</p>
                    <p><strong>Duration:</strong> 2021-Present</p>
                  </div>
                  <div className="education-item mt-4">
                    <h4>Mission Academy Inter College, Baheri</h4>
                    <p>Intermediate (Science Stream)</p>
                    <p>Completed in 2020</p>
                    <ul>
                      <li>Subjects: Physics, Chemistry, Mathematics</li>
                      <li>Achievements: Top 10 in school, Participated in Science Exhibition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Card - Right Side */}
          <div className="col-md-4">
            <div className="image-card">
              <img
                src={portraitImg}
                alt="Portrait"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
