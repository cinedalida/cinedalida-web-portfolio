import React from "react";

// Import any styling or assets here
// import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* ========== Section 1: Hero Page ========== */}
      <section id="hero" className="section-hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Your tagline or intro here.</p>
      </section>

      {/* ========== Section 2: About Me ========== */}
      <section id="about" className="section-about">
        <h2>About Me</h2>
        <p>Brief description or bio goes here.</p>
      </section>

      {/* ========== Section 3: Tech ========== */}
      <section id="tech" className="section-tech">
        <h2>Tech Stack</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          {/* Add more as needed */}
        </ul>
      </section>

      {/* ========== Section 4: Projects ========== */}
      <section id="projects" className="section-projects">
        <h2>Projects</h2>

        {/* ========== Project: Application Development ========== */}
        <div className="project-section" id="app-dev">
          <h3>Application Development</h3>
          {/* Add cards, images, links, etc. */}
        </div>

        {/* ========== Project: Prototypes ========== */}
        <div className="project-section" id="prototypes">
          <h3>Prototypes</h3>
          {/* Add design screenshots, Figma links, etc. */}
        </div>

        {/* ========== Project: Arts and Posters ========== */}
        <div className="project-section" id="arts-posters">
          <h3>Arts & Posters</h3>
          {/* Add gallery, illustrations, etc. */}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
