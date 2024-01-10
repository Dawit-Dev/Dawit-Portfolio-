import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
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
        <p className="lead fs-3" style={{ textAlign: "left" }}>
          {about.bio}
        </p>
      </div>
      <div className="mt-4 px-5 container mt-5 mb-5">
        <h2 className="mb-4 fw-bold">{about.career_title}</h2>
        <p className="fs-3" style={{ textAlign: "left" }}>
          {about.career}
        </p>
      </div>
      <div className="mt-4 px-5 container mt-5 mb-5">
        <h2 className="mb-4 fw-bold">{about.contact_info_title}</h2>
        <p className="fs-3" style={{ textAlign: "left" }}>
          {about.contact_info}
        </p>
        <div>
          <p className="fs-3 ">
            <FontAwesomeIcon icon={faPhoneVolume} />{" "}
            <span className="mx-3">+44 7454 961171</span>
          </p>
          <p className="fs-3 ">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span className="mx-3">akdawit1@gmail.com</span>
          </p>
          <p className="fs-3 ">
            <FontAwesomeIcon icon={faMapLocationDot} />{" "}
            <span className="mx-3">
              5 Coundon Street, Coventry, CV1 4AS United Kingdom
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
