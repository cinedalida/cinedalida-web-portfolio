import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#03030B] py-6">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Horizontal Line */}
        <div className="border-t border-blue-400 mb-4"></div>

        {/* Footer Text */}
        <div className="flex justify-between text-gray-200 text-sm">
          <span>2025 Portfolio</span>
          <span>Francine Dalida</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
