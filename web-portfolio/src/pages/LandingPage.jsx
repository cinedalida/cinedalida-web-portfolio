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
      {/* note: make min width width - maxwidth*/}
      {/* so could be almost black lahat*/}
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

        <div className="contact-icons">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/ysabel.dalida.15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/path/to/facebook-icon.png"
              alt="Facebook"
              className="icon"
            />
          </a>
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/cinedalida/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/path/to/linkedin-icon.png"
              alt="LinkedIn"
              className="icon"
            />
          </a>
          {/* GitHub Icon */}
          <a
            href="https://github.com/cinedalida"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/path/to/github-icon.png" alt="GitHub" className="icon" />
          </a>
        </div>
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
        <div className="project-wrapper container">
          {/* ========== Project: Application Development ========== */}
          <div className="project-section mb-5" id="app-dev">
            <h3>Application Development</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img
                    src="la-spot.jpg"
                    className="card-img-top"
                    alt="La Spot"
                  />
                  <div className="card-body">
                    <h5 className="card-title">La Spot</h5>
                    <p className="card-text">
                      A university parking system web app with live maps and
                      admin control.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img
                    src="hollow-knight.jpg"
                    className="card-img-top"
                    alt="HK Gallery"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Hollow Knight Gallery</h5>
                    <p className="card-text">
                      A fan-made gallery showcasing Hollow Knight characters and
                      art.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img
                    src="product-landing.jpg"
                    className="card-img-top"
                    alt="Product Landing Page"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Landing Page</h5>
                    <p className="card-text">
                      A stylish landing page built with HTML, CSS, and
                      Bootstrap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== Project: Prototypes ========== */}
          <div className="project-section mb-5" id="prototypes">
            <h3>Prototypes</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Lauviah</h5>
                    <p className="card-text">
                      A productivity and wellness prototype app for personal
                      growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Apo Kalinga</h5>
                    <p className="card-text">
                      Community-based health services prototype for indigenous
                      groups.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Cha-Ching</h5>
                    <p className="card-text">
                      A financial literacy app prototype focused on gamified
                      learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== Project: Arts and Posters ========== */}
          <div className="project-section" id="arts-posters">
            <h3>Arts & Posters</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img
                    src="art-portfolio.jpg"
                    className="card-img-top"
                    alt="Art Portfolio"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Art Portfolio</h5>
                    <p className="card-text">
                      A collection of my digital artworks and illustration
                      experiments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img
                    src="posters.jpg"
                    className="card-img-top"
                    alt="Posters"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Event Posters</h5>
                    <p className="card-text">
                      Various posters designed for school events and
                      organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 5: Footer ========== */}
      <footer className="section-footer">
        <div className="footer-content">
          <p>&copy; 2023 Francine Dalida. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              GitHub
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
