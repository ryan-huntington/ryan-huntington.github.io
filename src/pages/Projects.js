import React, { useState, useEffect } from 'react';
import projectsData from './projects/projectsData.json'
import './styles.css'
import ProjectSquare from './projects/ProjectSquare';
import FilterDropdown from '../components/FilterDropdown';

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);

  useEffect(() => {
    const filterProjects = () => {
      let filtered = projectsData;

      if (selectedTags.length > 0) {
        filtered = filtered.filter(project => selectedTags.every(tag => project.tags.includes(tag)));
      }

      if (selectedExperienceLevels.length > 0) {
        filtered = filtered.filter(project => selectedExperienceLevels.includes(project.experienceLevel));
      }

      if (selectedProjectTypes.length > 0) {
        filtered = filtered.filter(project => selectedProjectTypes.includes(project.projectType));
      }

      setFilteredProjects(filtered);
    };
    filterProjects();

  }, [selectedTags, selectedExperienceLevels, selectedProjectTypes])
  const handleTagFilter = (tags) => {
    setSelectedTags(tags);
  };

  const handleExperienceLevelFilter = (levels) => {
    setSelectedExperienceLevels(levels);
  };

  const handleProjectTypeFilter = (types) => {
    setSelectedProjectTypes(types);
  };

  return (
    <div className='page'>
      <h1>Projects</h1>
      <FilterDropdown
        options={['React', 'Python', 'JavaScript', 'HTML', 'CSS']}
        selectedValues={selectedTags}
        setSelectedValues={handleTagFilter}
      />

      <FilterDropdown
        options={['1-3 years', '4-6 years', '7-9 years']}
        selectedValues={selectedExperienceLevels}
        setSelectedValues={handleExperienceLevelFilter}
      />

      <FilterDropdown
        options={['Software Engineering', 'Deep Learning']}
        selectedValues={selectedProjectTypes}
        setSelectedValues={handleProjectTypeFilter}
      />
      {filteredProjects.map(project => (
        <ProjectSquare
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default Projects;
