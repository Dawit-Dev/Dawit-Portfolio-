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
    <div className="container-fluid p-0">
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container">
          <h1 className="display-4">Welcome to Dawit's Portfolio</h1>
          <p className="lead">{summary.highlight}</p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={"/images/image.png"}
              className="img-fluid rounded-circle mb-3"
              alt="Profile"
            />
          </div>
          <div className="col-md-8">
            <h2>About Me</h2>
            <p
              className="h4 mb-4"
              style={{ padding: "1rem 0", textAlign: "left" }}
            >
              {summary.intro}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
