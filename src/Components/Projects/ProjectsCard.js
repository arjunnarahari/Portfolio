import React from "react";
import "./Projects.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={props.imageUrl} className="project-image" alt="project" />
      </div>

      <div className="project-details-container">
        <h2 className="project-heading">{props.projectName}</h2>
        <p className="project-details">{props.projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
