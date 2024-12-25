import React, { useState, useEffect } from "react";
import "./Skill.css"; // Assuming you have a separate CSS file for skills
import vi from '../img/vi.mp4';
const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillSection = document.getElementById("Skill");
      const rect = skillSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="Skill" className="p-5 bg-transparent skill-section">
       <div className="video-background">
        <video
          autoPlay
          loop
          muted
          className="background-video"
        >
          <source src={vi} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className={`skill-cards ${isVisible ? "visible" : ""}`}>
          {/* Skill Card 1 */}
          <div className="card skill-card">
            <div className="card-body">
              <h3 className="card-title">Internet of Things (IoT)</h3>
              <p className="card-description">
                Expertise in IoT development, including sensors, microcontrollers, and communication protocols. Hands-on experience with Raspberry Pi, Arduino, and MQTT to design connected systems that enhance efficiency and usability in various applications.
              </p>
            </div>
          </div>

          {/* Skill Card 2 */}
          <div className="card skill-card">
            <div className="card-body">
              <h3 className="card-title">Leadership</h3>
              <p className="card-description">
                Strong leadership and team management skills, with experience in leading projects and managing cross-functional teams. Focus on motivating team members, ensuring collaboration, and driving results.
              </p>
            </div>
          </div>

          {/* Skill Card 3 */}
          <div className="card skill-card">
            <div className="card-body">
              <h3 className="card-title">Matlab & Simulink</h3>
              <p className="card-description">
                Proficient in using MATLAB for algorithm development, data analysis, and simulations. I have used MATLAB for signal processing, control systems, and modeling complex systems.
              </p>
            </div>
          </div>

          {/* Skill Card 4 */}
          <div className="card skill-card">
            <div className="card-body">
              <h3 className="card-title">Circuit Designing</h3>
              <p className="card-description">
                Extensive experience in designing analog and digital circuits using CAD tools like Eagle and KiCAD. I specialize in creating robust circuit designs for real-world applications.
              </p>
            </div>
          </div>

          {/* Skill Card 5 */}
          <div className="card skill-card">
            <div className="card-body">
              <h3 className="card-title">Digital Systems Design</h3>
              <p className="card-description">
                In-depth knowledge of digital logic design, including sequential and combinational circuits. Experience with FPGA design using Verilog and VHDL for hardware implementation.
              </p>
            </div>
          </div>

          {/* Skill Card 6 */}
          <div className="card skill-card">
            <div className="card-body">
              <h3 className="card-title">Embedded Systems Design</h3>
              <p className="card-description">
                Proficient in designing embedded systems using microcontrollers (e.g., ARM, PIC, AVR) for real-time applications. Hands-on experience in developing embedded software using C and assembly language.
              </p>
            </div>
          </div>

          {/* Skill Card 7 */}
          <div className="card skill-card">
            <div className="card-body">
              <h3 className="card-title">Power Electronics</h3>
              <p className="card-description">
                Knowledge of power electronics components and systems, including DC-DC converters, inverters, and motor control. Experience with simulation tools like PSpice and MATLAB for power system design.
              </p>
            </div>
          </div>

          {/* Skill Card 8 */}
          <div className="card skill-card">
            <div className="card-body">
              <h3 className="card-title">Analog Electronics</h3>
              <p className="card-description">
                Strong background in analog electronics, including op-amps, filters, amplifiers, and signal processing circuits. Proficient in analyzing and designing analog circuits for various applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
