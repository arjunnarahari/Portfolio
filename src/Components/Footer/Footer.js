import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footer-link">
      {props.phrase}
      <Link to={props.toAddress} className="footer-link-element">
        {props.footerLink}
      </Link>
    </div>
  );
};

export default Footer;
