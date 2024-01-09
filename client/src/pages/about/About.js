import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./about.css";

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
    <div className="about-main">
      <div className="px-5 container mt-5 mb-5">
        <h1 className="mb-4">{about.bio_title}</h1>
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
        <p style={{ textAlign: "left" }}>{about.contact_info}</p>
      </div>
    </div>
  );
};

export default About;
