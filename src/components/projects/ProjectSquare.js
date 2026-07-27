import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Projects.css";
import { getProjectType } from "../../assets/projectTypes";

const ProjectSquare = ({ project }) => {
  const { color, icon: TypeIcon } = getProjectType(project.projectType);
  const isExternal = Boolean(project.link);

  const cover = project.cover ? (
    <img
      className="project-cover-img"
      src={`/assets/images/${project.cover}`}
      alt={project.name}
      loading="lazy"
    />
  ) : (
    <div
      className="project-cover-fallback"
      style={{
        background: `linear-gradient(135deg, ${color} 0%, #e7008a 130%)`,
      }}
    >
      <TypeIcon aria-hidden="true" />
    </div>
  );

  const inner = (
    <>
      <div className="project-cover">{cover}</div>
      <div className="project-body">
        <h3>{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <ul className="project-chips">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="project-footer">
        <span className="project-type-badge">
          <span className="type-dot" style={{ backgroundColor: color }} />
          {project.projectType}
        </span>
        <span className="project-cta">
          {isExternal ? <FaArrowUpRightFromSquare /> : <FaArrowRight />}
        </span>
      </div>
    </>
  );

  return isExternal ? (
    <a
      className="project-square"
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      {inner}
    </a>
  ) : (
    <Link
      className="project-square"
      to={`/project/${project.id}`}
      state={{ project }}
    >
      {inner}
    </Link>
  );
};

export default ProjectSquare;
