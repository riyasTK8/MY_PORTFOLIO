"use client";

import { motion } from "framer-motion";
import { GraduationCap, Book, Cpu, Lightbulb } from "lucide-react";

export default function EducationExplainer() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
      <div className="relative w-full h-40 flex items-center justify-center">
        {/* Central Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 rounded-[2rem] bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-600 relative z-10 shadow-lg"
        >
          <GraduationCap size={48} />
        </motion.div>

        {/* Orbital Icons */}
        {[
          { icon: Book, x: -80, y: -40, delay: 0.5 },
          { icon: Cpu, x: 80, y: -40, delay: 0.7 },
          { icon: Lightbulb, x: 0, y: -90, delay: 0.9 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: item.x, y: item.y }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              delay: item.delay,
            }}
            className="absolute glass bg-white/5 w-10 h-10 rounded-xl flex items-center justify-center text-violet-400 shadow-xl border-white/10"
          >
            <item.icon size={20} />
          </motion.div>
        ))}

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <motion.path
            d="M 50% 50% L 20% 40% M 50% 50% L 80% 40% M 50% 50% L 50% 10%"
            stroke="rgba(139,92,246,0.3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </svg>
      </div>

      <div className="w-full space-y-3">
        {[
          "Higher Secondary Education",
          "Learning Programming Foundations",
          "MERN Stack Specialization",
          "Professional Growth",
        ].map((text, i) => (
          <div key={i} className="relative h-6 overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.2 }}
              className="text-xs font-bold text-center text-slate-400 uppercase tracking-tighter"
            >
              {text}
              {i < 3 && <span className="text-violet-500 ml-2">➜</span>}
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden border border-white/10">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
        />
      </div>
    </div>
  );
}
