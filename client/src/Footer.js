import React from "react";
import linkedinLogo from "./images/LinkedIn.png";
import githubLogo from "./images/GitHub.png";

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container text-center">
        <a
          href="https://www.linkedin.com/in/dawit-abraha-a5732023a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" width="32" height="32" />
        </a>
        <a
          href="https://github.com/Dawit-Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <img src={githubLogo} alt="GitHub" width="32" height="32" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
