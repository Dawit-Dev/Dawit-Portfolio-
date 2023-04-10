import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import b from "../images/b.jpg";

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
          {/* <Link to="/about" className="btn btn-primary mr-2">
            Learn More
          </Link>
          <Link to="/gallery" className="btn btn-secondary">
            View Gallery
          </Link> */}
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src={b.jpg}
              className="img-fluid rounded-circle mb-3"
              alt="Profile"
            />
          </div>
          <div className="col-md-8">
            <h2>About Me</h2>
            <p>
              My name is Dawit Abraha and I am passionate about building web
              applications that provide a seamless user experience and meet the
              needs of businesses and individuals. With a deep understanding of
              the software development process, from ideation to deployment, my
              goal is to use my skills to create innovative and high-quality
              software solutions that make a difference.
            </p>
            <p>
              I am a recent graduate with a Bachelor's degree in Computer
              Science, and I have gained practical experience through various
              internships and personal projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
