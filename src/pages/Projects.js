import React, { useState, useEffect } from 'react';
import projectsData from '../assets/projectsData.json'
import './styles.css'
import ProjectSquare from '../components/ProjectSquare';
import FilterDropdown from '../components/FilterDropdown';

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);

  const [tags, setTags] = useState([])
  const [experience, setExperience] = useState([])
  const [type, setType] = useState([])

  useEffect(() => {
    const tagsArray = [...new Set(projectsData.map(item => item.tags).flat())]
    setTags(tagsArray);
    const typeArray = [... new Set(projectsData.map(item => item.projectType))];
    setType(typeArray)
    const experienceArray = [... new Set(projectsData.map(item => item.experienceLevel))];
    setExperience(experienceArray)
  }, [])

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
      <div className='filter-container'>
        <FilterDropdown
          options={tags}
          selectedValues={selectedTags}
          setSelectedValues={handleTagFilter}
          placeholder={'Languages'}
        />

        <FilterDropdown
          options={experience}
          selectedValues={selectedExperienceLevels}
          setSelectedValues={handleExperienceLevelFilter}
          placeholder={'Experience'}
        />

        <FilterDropdown
          options={type}
          selectedValues={selectedProjectTypes}
          setSelectedValues={handleProjectTypeFilter}
          placeholder={'Project Type'}
        />
      </div>
      <div className='projects-container'>
        {filteredProjects.map(project => (
          <ProjectSquare
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <div className="ending">
        <p>The code for this website can be found <a href="https://github.com/ryan-huntington/ryan-huntington.github.io" target="_blank"
          rel="noreferrer"
          title="Website Github">here</a>.</p>
      </div>

    </div>
  );
}

export default Projects;
