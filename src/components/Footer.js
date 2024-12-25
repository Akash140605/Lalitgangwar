import React from "react";
import "./Footer.css"; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>Contact: (+91) 7351363836 | <a href="mailto:lalitgangwar04@gmail.com">lalitgangwar04@gmail.com</a></p>
        </div>
        
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/lalit-gangwar-3a10b322b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/lalit_gangwar_https://www.instagram.com/lalit_gangwar_____/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" /> Instagram
          </a>
          <a
            href="https://x.com/Lalitgangwar012?t=CM5CvYQXCmam7QhRU9j7_Q&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faTwitter} className="footer-icon" /> Twitter
          </a>
        </div>

        <div className="footer-credits">
          <p>
            Developed By{" "}
            <a
              href="https://www.linkedin.com/in/akash-gupta-8b3025241/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              Akash Gupta
            </a>
          </p>
        </div>
      </div>

      <div className="footer-animation">
        <div className="animation-layer"></div>
      </div>
    </footer>
  );
};

export default Footer;
