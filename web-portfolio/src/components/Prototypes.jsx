import React from "react";
import { motion } from "framer-motion";
import { PROTOTYPES } from "../constants";

const Prototypes = () => {
  return (
    <section
      id="prototypes"
      className="py-10 px-4 bg-slate-50 dark:bg-[#03030B] transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {PROTOTYPES.map((proto, index) => (
            <a
              key={proto.id}
              href={proto.link}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group cursor-pointer"
              >
                {/* Phone Frame - Floating Animation */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className="relative mx-auto w-full max-w-[280px] aspect-[9/19] rounded-[3rem] p-3 bg-black shadow-2xl border-[8px] border-[#1a1a1a] ring-1 ring-white/10 overflow-hidden"
                >
                  {/* Screen Content */}
                  <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative bg-[#03030B]">
                    <img
                      src={proto.image}
                      alt={proto.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />

                    {/* Dynamic Gradient Overlay from constants */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${proto.color} opacity-40 group-hover:opacity-10 transition-opacity duration-700`}
                    />

                    {/* Info Bar - Slides up on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 pt-12 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {proto.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 leading-tight line-clamp-2">
                        {proto.description}
                      </p>
                    </div>
                  </div>

                  {/* Top Notch UI */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-full z-20 flex items-center justify-center border border-white/5">
                    <div className="w-1 h-1 rounded-full bg-gray-800 mr-2" />
                    <div className="w-8 h-1 bg-gray-900 rounded-full" />
                  </div>
                </motion.div>

                {/* Reflection/Shadow under phone */}
                <div className="w-24 h-4 bg-[#4880C9]/10 blur-xl rounded-full mx-auto mt-8 group-hover:scale-150 group-hover:opacity-60 transition-all duration-700" />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prototypes;
