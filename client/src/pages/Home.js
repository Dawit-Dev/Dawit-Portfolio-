import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <div className="jumbotron jumbotron-fluid bg-dark text-white mb-0">
        <div className="container">
          <h1 className="display-4">Welcome to Dawit's Portfolio</h1>
          <p className="lead">
            I am a Full Stack Developer with expertise in HTML, CSS, JavaScript,
            React, React Native, Python, Node.js, PostgreSQL, and Github.
          </p>
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
              Hello, I'm Dawit Abraha, and I'm dedicated to crafting web
              applications that deliver exceptional user experiences while
              fulfilling the unique requirements of businesses and individuals.
              With a profound grasp of the software development lifecycle, from
              concept to deployment, my mission is to leverage my expertise to
              create innovative, top-tier software solutions that drive
              meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
