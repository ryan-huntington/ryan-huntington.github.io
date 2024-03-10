import React, { useState } from 'react';
import projectsData from './projectsData.json'
import './styles.css'

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState('');
  const [selectedProjectType, setSelectedProjectType] = useState('');

  const handleTagFilter = (tag) => {
    // Logic to filter projects based on selected tags
    setSelectedTags([...selectedTags, tag]);
    const filtered = projectsData.filter(project =>
      project.tags.includes(tag)
    );
    setFilteredProjects(filtered);
  };

  const handleExperienceLevelFilter = (level) => {
    // Logic to filter projects based on selected experience level
    setSelectedExperienceLevel(level);
    const filtered = projectsData.filter(project =>
      project.experienceLevel === level
    );
    setFilteredProjects(filtered);
  };

  const handleProjectTypeFilter = (type) => {
    // Logic to filter projects based on selected project type
    setSelectedProjectType(type);
    const filtered = projectsData.filter(project =>
      project.projectType === type
    );
    setFilteredProjects(filtered);
  };
  return (
    <div className='page'>
      <h1>Projects</h1>
      {filteredProjects.map(project => (
        <p>{project.name}</p>
      ))}
    </div>
  );
}

export default Projects;
