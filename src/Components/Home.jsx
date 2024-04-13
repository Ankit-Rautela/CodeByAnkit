import React from "react";
import "../App.css";
import "../index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Maintenance from "./Maintenance";

const Home = () => {
  return (
    <>
      <Navbar />
      <Maintenance />
      <Footer />
    </>
  );
};

export default Home;
