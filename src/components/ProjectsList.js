import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json'; 
import './ProjectList.css';


const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="projects-list">
      <h2 className="projects-title">PROJECTS</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
