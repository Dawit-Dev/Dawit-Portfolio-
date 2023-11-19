import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [about, setabout] = useState({});

  useEffect(() => {
    axios
      .get("/api/about")
      .then((data) => {
        setabout(data.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-dark text-white mb-0">
        <h1 className="display-4">About Dawit-Dev</h1>
      </div>
      <div className="mt-4 px-4 container mt-5 mb-5">
        <p className="lead" style={{ textAlign: "left" }}>
          {about.bio}
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
           {about.career}
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
