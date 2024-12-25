import React, { useState, useEffect } from "react";
import "./Experience.css";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="bg-transparent experience-section">
      <div className={`containeri container ${isVisible ? "fade-in" : ""}`}>
        <h2 className="section-title">Professional Experience</h2>
        <ul className="experience-list">
          <li>
            <strong>Summer Training at Uniconverge Technologies, Noida</strong>{" "}
            (June 2024 - August 2024): Gained hands-on experience in IoT,
            embedded systems, and software development.
          </li>
          <li>
            <strong>Founding Member of IoT Club, M.J.P.R.U</strong>: Led
            initiatives and projects in IoT and related technologies.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
