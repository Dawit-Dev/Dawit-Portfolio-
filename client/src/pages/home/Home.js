import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css"

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
        <h4 className="highlight">{summary.highlight}</h4>
      </div>
      <div className="image-intro">
        <img src={"/images/developer.png"} className="img" alt="Profile" />
        <h4 className="intro">{summary.intro}</h4>
      </div>
      <div className="btns">
        <Link className="btn btn-primary text-light" to="/gallery">
          My Projects
        </Link>
        <Link className="btn btn-primary text-light" to="/about">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
