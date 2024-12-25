import React from "react";
import "./Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>Contact: (+91) 7351363836 | <a href="mailto:lalitgangwar04@gmail.com">lalitgangwar04@gmail.com</a></p>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/akash-gupta-8b3025241/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/lalit_gangwar_/profilecard/?igsh=MXVxeDZwcnNxMzFvaA=="
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
          <a
            href="https://x.com/Lalitgangwar012?t=CM5CvYQXCmam7QhRU9j7_Q&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Twitter
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
