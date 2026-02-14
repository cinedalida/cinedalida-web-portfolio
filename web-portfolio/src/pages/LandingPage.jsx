"use client";

// External Libraries
import React from "react";

// Local Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TechStack from "../components/TechStack.jsx";
import ProjectManager from "../components/ProjectManager.jsx";
import AiCine from "../components/AiCine.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import Hero from "../components/Hero.jsx";
import AboutMe from "../components/AboutMe.jsx";

// Local Styles
import "../css/landingPage.css";

export const APP_PROJECT_CATEGORIES = [
  { id: "app-dev", label: "Application Dev" },
];

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <TechStack />
      <ProjectManager />
      <ThemeToggle />
      <Footer />
    </>
  );
};

export default LandingPage;
