import React from "react";

const Footer = () => {
  return (
    <footer className="  py-3" style={{ backgroundColor: "#536980" }}>
      <div className="container text-center">
        <a
          href="https://www.linkedin.com/in/dawit-abraha-a5732023a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"/images/LinkedIn.png"}
            alt="LinkedIn"
            width="32"
            height="32"
          />
        </a>
        <a
          href="https://github.com/Dawit-Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <img src={"/images/GitHub.png"} alt="GitHub" width="32" height="32" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
