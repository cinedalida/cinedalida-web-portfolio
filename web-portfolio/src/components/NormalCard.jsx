import React from "react";

const NormalCard = ({ title, description }) => {
  return (
    <div className="mb-18 bg-[#181A20] rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_#4880C9] max-h-[1000px] h-full p-8">
      <div>
        <h5 className="text-2xl font-bold text-[#4880C9] mb-4">{title}</h5>
        <p className="text-[#D4D4D4]">{description}</p>
      </div>
    </div>
  );
};

export default NormalCard;
