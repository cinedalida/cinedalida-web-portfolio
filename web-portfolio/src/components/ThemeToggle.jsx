// External Libraries
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  // 1. Initialize state based on localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Fallback to system preference if no saved theme exists
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 2. Sync theme with document class and persist to localStorage
  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDark(!isDark)}
        className="w-14 h-14 rounded-2xl bg-slate-200 dark:bg-[#181A20]/80 backdrop-blur-xl border border-slate-300 dark:border-white/5 flex items-center justify-center shadow-2xl hover:border-[#4880C9]/50 transition-colors group"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ y: 20, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.3 }}
            className="text-[#4880C9] group-hover:text-white transition-colors"
          >
            {isDark ? <Moon size={24} /> : <Sun size={24} />}
          </motion.div>
        </AnimatePresence>

        {/* Floating Tooltip */}
        <div className="absolute right-full mr-4 px-3 py-1 bg-white dark:bg-[#181A20] text-black dark:text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-200 dark:border-white/10">
          {/* 3. Updated logic: If it's dark, the button should say "Light Mode" because that's what happens on click */}
          {isDark ? "Light Mode" : "Dark Mode"}
        </div>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
