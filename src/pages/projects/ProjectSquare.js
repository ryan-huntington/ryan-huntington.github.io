import React from 'react';

const ProjectSquare = ({ project }) => {
    return (
        <div className="project-square">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Tags: {project.tags.join(', ')}</p>
            <p>Experience Level: {project.experienceLevel}</p>
            <p>Project Type: {project.projectType}</p>
            <a href={project.link}>Learn More</a>
        </div>
    );
};

export default ProjectSquare;
