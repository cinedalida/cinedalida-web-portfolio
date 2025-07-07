// components/TechStack.jsx
import React, { useState } from "react";
import TechItem from "./TechItem";

// Sample icons (replace these with actual image paths in /assets)
// import htmlIcon from "../assets/html.png";
// import cssIcon from "../assets/css.png";
// import jsIcon from "../assets/js.png";
// import reactIcon from "../assets/react.png";
// import bootstrapIcon from "../assets/bootstrap.png";
// import figmaIcon from "../assets/figma.png";
// import viteIcon from "../assets/vite.png";

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  //   const techStacks = {
  //     frontend: [
  //       { icon: htmlIcon, alt: "HTML" },
  //       { icon: cssIcon, alt: "CSS" },
  //       { icon: jsIcon, alt: "JavaScript" },
  //       { icon: reactIcon, alt: "React" },
  //       { icon: bootstrapIcon, alt: "Bootstrap" },
  //     ],
  //     backend: [
  //       // Add your backend stack here
  //       // { icon: nodeIcon, alt: 'Node.js' },
  //     ],
  //     "other-tools": [
  //       { icon: figmaIcon, alt: "Figma" },
  //       { icon: viteIcon, alt: "Vite" },
  //     ],
  //   };

  return (
    <section className="tech-section">
      <h2>tech.</h2>
      <div className="category-selector">
        {["frontend", "backend", "other-tools"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category.replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="tech-grid">
        {/* {techStacks[selectedCategory].map((tech, index) => (
          <TechItem key={index} icon={tech.icon} alt={tech.alt} />
        ))} */}
      </div>
    </section>
  );
}
