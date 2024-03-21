import React from "react";
import { Search } from "lucide-react";
import profilePic from "../assets/profilePic.png";
import MaintenancePic1 from "../assets/MaintenancePic.jpg";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="logo-section">
          <div className="profile-image">
            <img src={profilePic} alt="logo" />
          </div>
        </div>

        <div className="Button-section">
        <form className="search-section">
          <input
            type="search"
            id="query"
            placeholder="Type here to search.."
            aria-label="Search through site content"
          />
          <button>
            <Search className="search-icon" />
          </button>
        </form>
        <div className="login-signIn">
          <button className="signUp-button">Signup</button>
          <button className="logIn-button">Login</button>
          
        </div>
        </div>
      </div>
      <img src={MaintenancePic1} alt="Maintenance Image" />
    </>
  );
};

export default Home;
