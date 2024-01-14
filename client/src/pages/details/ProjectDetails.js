import React from "react";
import "./details.css";

function ProjectDetails({ project }) {
  return (
    <div className="details-container">
      <h1>{project.title}</h1>
      <img src={project.image} className="project-image" alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetails;
