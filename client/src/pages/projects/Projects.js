import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { motion } from "framer-motion";
import "./projects.css";

const Project = ({ setProject }) => {
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();
 
  useEffect(() => {
    axios
      .get("/api/projects")
      .then((data) => {
        setProjects(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const scrollAnimation = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.5 * index },
    }),
  };

  return (
    <div className="projects-main">
      <div className="title">
        <h1 className="display-4">Projects</h1>
        <p className="lead">Check out some of my latest projects below.</p>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <motion.div
            variants={scrollAnimation}
            initial="hidden"
            whileInView="visible"
            custom={index + 1}
            className="project-wrapper"
            key={project.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setProject(project)
              navigate("/project-details");
            }}
          >
            <h5 className="project-title">{project.title}</h5>
            <img
              src={project.image}
              className="project-img"
              alt={project.title}
            />
            <div className="project-summary">
              <ReactReadMoreReadLess
                charLimit={140}
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
          </motion.div>
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
