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
        <h1>{about.bio_title}</h1>
        <p className="lead" style={{ textAlign: "left" }}>
          {about.bio}
        </p>
      </div>
      <div className="mt-4 px-4 container mt-5 mb-5">
        <h2>{about.career_title}</h2>
        <p style={{ textAlign: "left" }}>{about.career}</p>
      </div>
      <div className="mt-4 px-4 container mt-5 mb-5">
        <h2>{about.contact_info_title}</h2>
        <p style={{ textAlign: "left" }}>
          {about.contact_info}
        </p>
      </div>
    </div>
  );
};

export default About;
