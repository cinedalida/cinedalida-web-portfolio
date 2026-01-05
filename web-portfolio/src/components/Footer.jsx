// External Libraries
import React from "react";

// Local Components/Constants
import { NAV_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#03030B] relative z-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section */}
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white transition-colors duration-500">
              Hiraya Manawari.
            </h2>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
              Francine Ysabel B. Dalida &copy; 2025
            </p>
          </div>

          {/* Navigation Links - Dynamically Generated */}
          <div className="flex flex-wrap justify-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-black text-slate-500 hover:text-[#4880C9] transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Decorative Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/5 text-center">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.4em]">
            Bridging Design and Technology: Where Form Meets Function
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
