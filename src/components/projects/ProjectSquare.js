import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const ProjectSquare = ({ project }) => {
  return (
    <div className="project-square">
      <div className="content">
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-meta">
          <p>
            <b>Languages: </b>
            {project.tags.join(", ")}
          </p>
          <p>
            <b>Experience Level: </b>
            {project.experienceLevel}
          </p>
          <p>
            <b>Project Type: </b>
            {project.projectType}
          </p>
        </div>

        {project.link ? (
          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </a>
        ) : (
          <Link
            className="project-link"
            to={`/project/${project.id}`}
            state={{ project }}
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectSquare;
