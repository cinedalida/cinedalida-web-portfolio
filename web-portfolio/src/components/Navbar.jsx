import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#0C1B53]/20 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1000px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Logo</div>

        {/* Links */}
        <div className="flex space-x-8 text-white text-sm font-medium">
          <a href="#hero" className="hover:text-[#4880C9] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#4880C9] transition">
            About
          </a>
          <a href="#tech" className="hover:text-[#4880C9] transition">
            Tech
          </a>
          <a href="#projects" className="hover:text-[#4880C9] transition">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
