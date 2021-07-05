import React from "react";
import Header from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import Footer from "../Footer/Footer";
import aboutImg from "./../../assets/about_anime.gif";
import "./About.css";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me"
        details="The Programmer | Trader | Fitness Enthusiast | Spiritualistic"
      />
      <div className="about-main">
        <div className="about-main-left">
          <h3 className="about-sub-header">Education</h3>
          <p className="about-sub-details">
            Completed my graduation in Computer Engineering from SIES Graduate
            of Technology (2013)
          </p>

          <h3 className="about-sub-header">Professional Life</h3>
          <p className="about-sub-details">
            I have 6.3 years of Professional Experience in Software Programming.
            I like to code at the same time explore and learn new programming
            languages. ReactJs is the new library which i am learning currently
            and this portfolio has been built using ReactJs.
          </p>

          <h3 className="about-sub-header">Hobbies & Interests</h3>
          <p className="about-sub-details">
            I like to be fit so exercise is a must in my life. In my leisure
            time I play Table Tennis and i also have great interest in sports
            specially Lawn Tennis and Table Tennis, sports motivates me to not
            give up on something which i want to do.
          </p>
        </div>
        <div className="about-main-right">
          <img src={aboutImg} className="about-anime" alt="animation" />
        </div>
      </div>
      <Footer
        phrase="Check out my "
        footerLink="projects"
        toAddress="/projects"
      />
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
