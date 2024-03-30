import React from "react";
import "./footer.css";
import git from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social">
          <img src={git} alt="" />
          <img src={linkedin} alt="" />
          <img src={insta} alt="" />
        </div>

        <div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
