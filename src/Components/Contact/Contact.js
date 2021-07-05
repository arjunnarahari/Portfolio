import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import contactVector from "./../../assets/contact_anime.png";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import web from "./../../assets/web.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="section-container">
      <Header heading="Get in Touch" details="Feel free to drop me a email" />

      <div className="contact-form-container">
        <form className="contact-form">
          <input
            type="email"
            placeholder="Enter email id"
            name="email"
            className="input-box email-input"
          />
          <textarea
            type="text"
            placeholder="Enter your message"
            name="message"
            className="input-box body-input"
          />
          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>

      <div className="social-icons-container">
        <a href="https://github.com/arjunnarahari" className="social-icon">
          <img src={github} alt="github"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/arjun-narahari-01667078/"
          className="social-icon"
        >
          <img src={linkedin} alt="linkedin"></img>
        </a>
        <a href="https://github.com/arjunnarahari" className="social-icon">
          <img src={web} alt="web"></img>
        </a>
      </div>

      <Footer phrase="Read more " footerLink="about me" toAddress="/about" />

      <div className="contact-vector-frame">
        <img src={contactVector} className="contact-vector" alt="contact" />
      </div>
    </div>
  );
};

export default Contact;
