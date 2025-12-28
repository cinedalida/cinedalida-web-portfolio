import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Local Data
import { TECH_STACK } from "../constants";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(TECH_STACK[0].id);
  const activeCategory = TECH_STACK.find((cat) => cat.id === activeTab);

  return (
    <section id="tech" className="py-10 md:py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto md:overflow-visible no-scrollbar pb-4 md:pb-0 md:justify-center gap-2 md:gap-4 mb-16 md:mb-24 px-2">
          {TECH_STACK.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative shrink-0 px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 uppercase tracking-widest ${
                activeTab === category.id
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {activeTab === category.id && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-[#4880C9]/10 rounded-full border border-[#4880C9]/30 shadow-[0_0_20px_rgba(72,128,201,0.2)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">
                {category.label}
              </span>
            </button>
          ))}
        </div>

        {/* Icons Grid Container */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
            >
              {activeCategory?.items.map((item) => {
                // Logic to handle the dynamic Icon component
                const Icon = item.IconComponent;

                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group relative flex flex-col items-center justify-center p-6 md:p-8 bg-[#181A20]/60 border border-white/5 rounded-[32px] transition-all duration-500 hover:border-[#4880C9]/30 aspect-square shadow-xl"
                  >
                    {/* Icon Wrapper */}
                    <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 drop-shadow-2xl flex items-center justify-center">
                      {/* Priority 1: React Icon Component */}
                      {Icon ? (
                        <Icon
                          size="100%"
                          style={{ color: item.color }}
                          className="filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                        />
                      ) : (
                        /* Priority 2: Fallback to standard Image */
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 contrast-125 transition-all duration-500"
                        />
                      )}
                    </div>

                    {/* Tech Name */}
                    <span className="text-[10px] md:text-xs font-black text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest text-center">
                      {item.name}
                    </span>

                    {/* Hover Accent Line */}
                    <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 w-6 h-1 bg-white/5 group-hover:bg-[#4880C9]/50 rounded-full transition-all duration-500 group-hover:w-10" />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
