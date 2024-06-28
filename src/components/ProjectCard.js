import React, { useState } from 'react';
import './ProjectCard.css';

import { FiExternalLink as ExternalIcon } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="project-card">
    
      <button className="expand-button" id={`${isExpanded ? 'expanded' : 'not-expanded'}`} onClick={toggleExpand}></button>
      <div className='project-info'>
        <div className="project-header">
        
          <div>
            <h2>{project.title}</h2>
            <h3>{project.subtitle}</h3>
          </div>
          <div className="project-links">
            {project.links.map((link, index) => (
              <a key={index} id={index === 0 ? "first-link" : ""} href={link} target="_blank" rel="noopener noreferrer">
                {index === 0 ? "Check it out!" : "Github repo"}
                <ExternalIcon size={18}/>
              </a>
            ))}
            
          </div>
          
        </div>
      
        {isExpanded && (
          <div className="project-details">
            <div className="project-images">
              {project.imageNames.map((image, index) => (
                <img key={index} src={require(`../assets/${image}`)} alt={project.title} />
              ))}
            </div>
            <h3>About:</h3>
            <ul className="project-features">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3>Technical Details:</h3>
            <ul className="project-technical-details">
              {project.technicalDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ProjectCard;
