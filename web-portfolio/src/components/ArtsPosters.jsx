import React from "react";
import { motion } from "framer-motion";
import { ARTS } from "../constants";
import { ExternalLink } from "lucide-react";

const ArtsPosters = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {ARTS.map((art) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-full"
          >
            {/* Glass Card Container */}
            <div className="rounded-[40px] overflow-hidden glass-card border border-white/5 p-4 h-full flex flex-col transition-all duration-700 hover:border-[#4880C9]/30 shadow-lg hover:shadow-2xl">
              {/* Image Showcase */}
              <div className="aspect-[4/3] overflow-hidden relative rounded-[30px] border border-white/5">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
              </div>

              {/* Info Content */}
              <div className="p-8 space-y-4 flex-grow">
                <h3 className="text-3xl font-black text-white group-hover:text-[#4880C9] transition-colors">
                  {art.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  {art.description}
                </p>
              </div>

              {/* Footer Action */}
              <div className="p-8 pt-0 flex items-center justify-between">
                <button className="px-6 py-2.5 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#4880C9] hover:text-white transition-all flex items-center gap-2">
                  View Work
                  <ExternalLink size={12} />
                </button>
                <div className="h-1 w-12 bg-white/10 rounded-full group-hover:bg-[#4880C9] transition-all group-hover:w-24" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArtsPosters;
