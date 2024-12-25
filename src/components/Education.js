import React, { useState, useEffect } from "react";
import "./Education.css"; // Assuming you have a separate CSS file

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
        <div className={`education-cards ${isVisible ? "visible" : ""}`}>
          {/* Education Card 1 - Left */}
          <div className="card education-card left-card">
            <div className="card-body">
              <h3 className="card-title">M.J.P. Rohilkhand University, Bareilly</h3>
              <p className="card-subtitle">B.Tech in Electronics & Communication Engineering</p>
              <p>CGPA: 7.50</p>
              <ul className="card-content">
                <li>Key Skills: Embedded Systems, Digital Electronics, Communication Systems</li>
                <li>Projects: Smart Home Automation, IoT-based Weather Monitoring System</li>
                <li>Achievements: Dean’s List, Participation in National-level Tech Fests</li>
              </ul>
              <p><strong>Duration:</strong> 2021-Present</p>
            </div>
          </div>

          {/* Education Card 2 - Right */}
          <div className="card education-card right-card">
            <div className="card-body">
              <h3 className="card-title">Mission Academy Inter College, Baheri</h3>
              <p className="card-subtitle">Intermediate (Science Stream)</p>
              <p>Completed in 2020</p>
              <ul className="card-content">
                <li>Subjects: Physics, Chemistry, Mathematics</li>
                <li>Achievements: Top 10 in school, Participated in Science Exhibition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
