import React from "react";

const ProjectCard = ({ image, alt, title, description }) => {
  return (
    <>
      <div className="card h-100 bg-[#181A20] rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_#4880C9]">
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
      </div>
    </>
  );
};

export default ProjectCard;
