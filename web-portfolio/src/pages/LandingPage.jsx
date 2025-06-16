import React from "react";

import "../css/landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* ========== Section 1: Hero Page ========== */}
      <section id="hero" className="section-hero">
        <h1>Hiraya Manawari</h1>
        <p>want an application that is both captivating and creative?</p>

        <div className="hero-buttons">
          <button className="btn-primary">Download Resume</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </section>

      {/* ========== Section 2: About Me ========== */}
      <section id="about" className="section-about">
        <h2>about me.</h2>
        <p>
          hello, I’m Francine Dalida, you can call me Cine for short! Currently
          a sophomore Computer Science student at De La Salle University -
          Dasmariñas
        </p>
        <p>
          almost a full-stack developer, an artist wannabe, and a reader by
          choice.
        </p>
      </section>

      {/* ========== Section 3: Tech ========== */}
      <section id="tech" className="section-tech">
        <h2>tech.</h2>
        // Tech Stack Section
        <div id="tech-stack">
          {/* Front-End Category */}
          <div id="frontend-stack" className="tech-category">
            <div className="tech-item"></div>
            <div className="tech-item"></div>
            <div className="tech-item"></div>
          </div>
          {/* Back-End Category */}
          <div id="backend-stack" className="tech-category">
            <div className="tech-item"></div>
            <div className="tech-item"></div>
            <div className="tech-item"></div>
          </div>
          {/* Other Tools Category */}
          <div id="other-tools-stack" className="tech-category">
            <div className="tech-item"></div>
            <div className="tech-item"></div>
            <div className="tech-item"></div>
          </div>
        </div>
      </section>

      {/* ========== Section 4: Projects ========== */}
      <section id="projects" className="section-projects">
        <h2>projects.</h2>
        <div className="project-wrapper">
          {/* ========== Project: Application Development ========== */}
          <div className="project-section" id="app-dev">
            <h3>Application Development</h3>
            {/* Long cards: La Spot, Hollow Knight Gane Gallery, Product Landing Page*/}
          </div>

          {/* ========== Project: Prototypes ========== */}
          <div className="project-section" id="prototypes">
            <h3>Prototypes</h3>
            {/* Short cards: Prototypes: Lauviah, Apo kalinga, Cha-Ching */}
          </div>

          {/* ========== Project: Arts and Posters ========== */}
          <div className="project-section" id="arts-posters">
            <h3>Arts & Posters</h3>
            {/* Short cards: Art portfolio, Artworks */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
