import React from "react";

const About = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-dark text-white mb-0">
        <h1 className="display-4">About Dawit-Dev</h1>
      </div>
      <div className="mt-4 px-4 container mt-5 mb-5">
        <p className="lead" style={{ textAlign: "left" }}>
          Hello! I'm Dawit Abraha, a passionate web developer dedicated to
          crafting seamless user experiences and delivering tailored solutions
          for both businesses and individuals. With a deep understanding of the
          entire software development lifecycle, from ideation to deployment, I
          strive to leverage my skills to create innovative, high-quality
          software that makes a meaningful impact.
        </p>
      </div>
      {/* <div className="mt-4 px-4 container mt-5 mb-5">
        <h2>Technical Proficiency</h2>
        <p style={{ textAlign: "left" }}>
          My technical arsenal includes proficiency in HTML, CSS, JavaScript,
          React, React Native, Python, Node.js, PostgreSQL, and GitHub. I'm
          passionate about staying at the forefront of technology trends,
          ensuring that the solutions I build are always cutting-edge.
        </p>
      </div> */}
      <div>
        <div>
          <div className="mt-4 px-4">
            <h2>Technical Proficiency</h2>
            {/* <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faCss3} /> CSS
              </li>
              <li>
                <i className="fas fa-css3-alt"></i> CSS
              </li>
              <li>
                <i className="fab fa-js"></i> JavaScript
              </li>
              <li>
                <i className="fab fa-react"></i> React
              </li>
              <li>
                <i className="fab fa-react"></i> React Native
              </li>
              <li>
                <i className="fab fa-python"></i> Python
              </li>
              <li>
                <i className="fab fa-node"></i> Node.js
              </li>
              <li>
                <i className="fas fa-database"></i> PostgreSQL
              </li>
              <li>
                <i className="fab fa-github"></i> GitHub
              </li>
            </ul> */}
            <p>
              I'm passionate about staying at the forefront of technology
              trends, ensuring that the solutions I build are always
              cutting-edge.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 px-4 container mt-5 mb-5">
        <h2>Professional Journey</h2>
        <p style={{ textAlign: "left" }}>
          My journey in web development began with a strong educational
          foundation. I hold a degree in [Your Degree], and I've further honed
          my skills through hands-on experience and continuous learning.
          Notably, I have successfully completed courses in React Native and
          Python on Udemy, gaining profound expertise in mobile app development
          and backend scripting.
        </p>
      </div>
      <div className="mt-4 px-4 container mt-5 mb-5">
        <h2>Project Highlights</h2>
        <p style={{ textAlign: "left" }}>
          Throughout my career, I've had the privilege of working on diverse
          projects that have challenged and enriched my skill set. Some notable
          endeavors include [Project Name], where I [Brief Description of Your
          Contribution and the Impact]. These experiences have fueled my passion
          for innovation and excellence.
        </p>
      </div>
      <div className="mt-4 px-4 container mt-5 mb-5">
        <h2>Beyond Development</h2>
        <p style={{ textAlign: "left" }}>
          While I thrive in the digital realm, I also have interests outside of
          coding. Exploring new technologies, contributing to open-source
          projects, and staying active in the developer community are just a few
          ways I continue to grow both personally and professionally.
        </p>
      </div>
      <div className="mt-4 px-4 container mt-5 mb-5">
        <h2>Get in Touch</h2>
        <p style={{ textAlign: "left" }}>
          If you'd like to collaborate, have a project in mind, or just want to
          chat about tech, I'm just an email away. Feel free to reach out at
          akdawit1@gmail.com, and let's explore the possibilities together.
        </p>
      </div>
    </div>
  );
};

export default About;
