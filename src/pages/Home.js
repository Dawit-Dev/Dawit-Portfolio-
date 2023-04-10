import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../images/image.png";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <div className="jumbotron jumbotron-fluid bg-dark text-white mb-0">
        <div className="container">
          <h1 className="display-4">Welcome to Dawit's Portfolio</h1>
          <p className="lead">
            I am a Full Stack Developer with expertise in HTML, CSS, JavaScript,
            React, Node.js, PostgreSQL, and Github.
          </p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-circle mb-3"
              alt="Profile"
            />
          </div>
          <div className="col-md-8">
            <h2>About Me</h2>
            <p className="h4 mb-4" style={{ padding: "1rem 0" }}>
              My name is Dawit Abraha and I am passionate about building web
              applications that provide a seamless user experience and meet the
              needs of businesses and individuals. With a deep understanding of
              the software development process, from ideation to deployment, my
              goal is to use my skills to create innovative and high-quality
              software solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
