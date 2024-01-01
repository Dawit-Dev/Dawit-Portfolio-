import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/dawit-abraha-a5732023a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
        </a>
        <a
          href="https://github.com/Dawit-Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <FontAwesomeIcon icon={faGithub} className="github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
