import React from "react";

export default function TechItem({ icon, alt }) {
  return (
    <div className="tech-card">
      <img src={icon} alt={alt} className="tech-icon" />
    </div>
  );
}
