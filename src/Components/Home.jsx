import React from "react";
import { Search, Linkedin, Github, Twitter } from "lucide-react";
import profilePic from "../assets/profilePic.png";
import Maintenance from "./Maintenance";
import "../App.css";
import "../index.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="logo-section">
          <img className="profile-image" src={profilePic} alt="logo" />
        </div>

        <div className="Button-section">
          <form className="search-section">
            <input
              className="input "
              type="search"
              id="query"
              placeholder="Type here to search.."
              aria-label="Search through site content"
            />
            <button className="search-button">
              <Search className="search-icon" />
            </button>
          </form>
          <div className="login-signIn">
            <button className="signUp-button">Signup</button>
            <button className="logIn-button">Login</button>
          </div>
        </div>
      </div>

      <Maintenance />
      <div className="main-content">
        <div className="main-body">
          <div className="left-main-body">
            <p>Showcase window</p>
          </div>
          <div className="right-main-body">
            <div className="intro-text">
              <p>Hi, This is Ankit Rautela.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <img className="footer-profile-image" src={profilePic} alt="logo" />
        <div className="social-link">
          <div className="social-link-text">
            <p>Follow Us</p>
          </div>

          <div className="social-link-div">
            <a href="https://www.linkedin.com/in/ankit-rautela/">
              <Linkedin />
            </a>
            <a href="https://github.com/Ankit-Rautela">
              <Github />
            </a>
            <a href="https://twitter.com/CodeByAnkit">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
