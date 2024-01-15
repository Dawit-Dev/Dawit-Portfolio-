import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./details.css";

function ProjectDetails({ project }) {
  return (
    <div className="details-main-container">
      <div className="title-and-btn">
        <h1>{project.title}</h1>
        <Link to="/projects" className="btn text-light btn-primary">
          <FontAwesomeIcon icon={faArrowLeft} className="fs-5" />
          <span className="m-3 fs-5">Back</span>
        </Link>
      </div>
      <div className="details-wrapper">
        <img
          src={project.image}
          className="project-image"
          alt={project.title}
        />
        <p className="description fs-5">{project.description}</p>
      </div>
      <div className="btn-group w-100">
        <a
          href={project.demo}
          className="btn fs-3 rounded-0 text-light btn-outline-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={project.repo}
          className="btn fs-3 rounded-0 text-light btn-outline-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;
