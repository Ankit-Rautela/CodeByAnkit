import React from "react";
import { Search } from "lucide-react";
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
            <input className="input "
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

      <div className="footer">

      </div>
    </>
  );
};

export default Home;
