import { useState, useEffect } from "react";
import axios from "axios";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./projects.css";


const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((data) => {
        setProjects(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="projects-main">
      <div className="title">
        <h1 className="display-4">Projects</h1>
        <p className="lead">Check out some of my latest projects below.</p>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div
            className="project-wrapper"
            key={project.id}
            style={{ transition: "all 0.2s ease-in-out" }}
          >
            <h5 className="project-title">{project.title}</h5>
            <img
              src={project.image}
              className="project-img"
              alt={project.title}
              style={{ transition: "all 0.2s ease-in-out" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            {/* <p className="project-summary" style={{ textAlign: "left" }}>
              {project.description}
            </p> */}
            <div className="project-summary">
              <ReactReadMoreReadLess
                charLimit={150}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
              >
                {project.description}
              </ReactReadMoreReadLess>
            </div>

            <div className="btn-group w-100">
              <a
                href={project.demo}
                className="btn rounded-0 text-light btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href={project.repo}
                className="btn rounded-0 text-light btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .card:hover {
            position: relative;
            z-index: 2;
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Project;
