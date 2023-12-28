import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    axios
      .get("/api/summary")
      .then((data) => {
        setSummary(data.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home-main">
      <div className="hero">
        <h1 className="display-2 fw-bold">Welcome to my Portfolio</h1>
        <h4 className="lead">{summary.highlight}</h4>
      </div>
      <div className="image-intro">
        <img
          src={"/images/image.png"}
          className="img-fluid rounded-circle"
          alt="Profile"
        />
          <h3
            className="intro">
            {summary.intro}
          </h3>
        </div>
    </div>
  );
};

export default Home;
