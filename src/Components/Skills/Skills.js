import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import skillsVector from "./../../assets/skills_vector.png";
import { skillList } from "./../../assets/skillsData";
import SkillCard from "./SkillCard";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Skills"
        details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
      />
      <div className="skills-card-container">
        {skillList.map((skill) => {
          return (
            <SkillCard skillUrl={skill.skillUrl} skillName={skill.skillName} />
          );
        })}
      </div>
      <Footer phrase="Get in " footerLink="touch" toAddress="/contact" />
      <div className="skills-vector-frame">
        <img src={skillsVector} className="skills-vector" alt="skills" />
      </div>
    </div>
  );
};

export default Skills;
