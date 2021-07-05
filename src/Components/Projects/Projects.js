import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { projectsData } from "./../../assets/projectsData";
import ProjectCard from "./ProjectsCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Projects"
        details="Here are few cool things which i have worked on"
      />
      <div className="project-cards-container">
        {projectsData.map((project) => {
          return (
            <ProjectCard
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              imageUrl={project.imageUrl}
              key={project.projectName}
            />
          );
        })}
      </div>
      <Footer phrase="Check out my " footerLink="skills" toAddress="/skills" />
    </div>
  );
};

export default Projects;
