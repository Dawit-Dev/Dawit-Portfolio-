import { useState, useEffect } from "react";
import axios from "axios";
import "./projects.css"

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("/api/projects").then((data) => {
      setProjects(data.data)
    }).catch((error) => console.log(error))
  }, [])

  return (
    <div className="projects-main container-fluid">
       <div className="jumbotron jumbotron-fluid">
        <div className="title">
          <h1 className="display-4">Projects</h1>
          <p className="lead">Check out some of my latest projects below.</p>
        </div>
      </div>
      <div>
        <div className="row">
          {projects.map((project) => (
            <div className="project-wrapper col-md-6 mb-4" key={project.id}>
              <div
                className="card shadow-sm h-100"
                style={{ transition: "all 0.2s ease-in-out" }}
              >
                <div className="card-header">
                  <h5 className="card-title">{project.title}</h5>
                </div>
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ transition: "all 0.2s ease-in-out" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.6)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "left" }}>
                    {project.description}
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ width: "200px" }}
                  >
                    <div className="btn-group w-100">
                      <a
                        href={project.demo}
                        className="btn btn-sm btn-outline-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <a
                        href={project.repo}
                        className="btn btn-sm btn-outline-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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