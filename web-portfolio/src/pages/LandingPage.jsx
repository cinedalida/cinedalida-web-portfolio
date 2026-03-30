"use client";

// External Libraries
import React from "react";

// Local Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TechStack from "../components/TechStack.jsx";
import ProjectManager from "../components/ProjectManager.jsx";
// import AiCine from "../components/AiCine.jsx"; (to be implemented)
import ThemeToggle from "../components/ThemeToggle.jsx";
import Hero from "../components/Hero.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Experience from "../components/Experience.jsx";

// Local Styles
import "../css/landingPage.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <TechStack />
      <ProjectManager />
      <Footer />
    </>
  );
};

export default LandingPage;
