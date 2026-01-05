import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll logic from AI Studio
  const handleScrollToLink = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="fixed top-6 left-6 z-[60] md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-[#0C1B53]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-lg text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navbar (Pill Design from AI Studio) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-8 left-0 right-0 z-50 hidden md:flex justify-center items-center pointer-events-none px-4"
      >
        <div
          className={`backdrop-blur-md transition-all duration-500 border border-white/10 rounded-full px-8 py-3 shadow-xl pointer-events-auto flex items-center justify-center gap-12 ${
            scrolled
              ? "bg-white/80 dark:bg-[#0C1B53]/40"
              : "bg-white/40 dark:bg-[#0C1B53]/20"
          }`}
        >
          {/* First half of links */}
          <div className="flex items-center gap-10">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollToLink(e, link.href)}
                className="text-sm font-medium text-white hover:text-[#4880C9] transition-all relative group uppercase tracking-widest"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4880C9] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Central Logo Icon */}
          <div className="w-10 h-10 bg-[#4880C9] rounded-full flex items-center justify-center shadow-lg text-white">
            <Code2 size={20} />
          </div>

          {/* Second half of links */}
          <div className="flex items-center gap-10">
            {NAV_LINKS.slice(2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollToLink(e, link.href)}
                className="text-sm font-medium text-slate-700 dark:text-white hover:text-[#4880C9] transition-all relative group uppercase tracking-widest"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4880C9] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay (From AI Studio) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 left-0 bottom-0 w-[80%] z-[56] md:hidden bg-[#03030B] shadow-2xl p-8 pt-24 flex flex-col gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollToLink(e, link.href)}
                className="text-2xl font-bold text-white uppercase tracking-widest hover:text-[#4880C9]"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
