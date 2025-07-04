import React from "react";

const ProjectCard = ({ image, alt, title, description }) => {
  <div className="card h-100 bg-[#181A20] rounded-2xl shadow-lg overflow-hidden">
    <img
      src={image}
      className="card-img-top object-cover h-48 w-full"
      alt={alt}
    />
    <div className="card-body p-6">
      <h5 className="card-title text-2xl font-bold text-[#4880C9] mb-2">
        {title}
      </h5>
      <p className="card-text text-[#D4D4D4]">{description}</p>
    </div>
  </div>;
};

export default ProjectCard;
