"use client";

import { motion } from "framer-motion";
import { Code2, User, Globe, MessageSquare } from "lucide-react";

export default function AboutExplainer() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
      <div className="relative">
        {/* Developer Avatar Sim */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400"
        >
          <User size={32} className="sm:w-10 sm:h-10" />
        </motion.div>

        {/* Floating Code Snippets */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              x: i % 2 === 0 ? 60 : -60, 
              y: -40 - i * 20 
            }}
            transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 text-[10px] font-mono text-cyan-500/40"
          >
            {["{ code }", "<div />", "=> logic"][i]}
          </motion.div>
        ))}
      </div>

      {/* Narrative Board */}
      <div className="space-y-4 w-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />
        
        <div className="flex flex-col gap-4">
          {[
            { text: "Passionate MERN Developer", icon: Code2, color: "text-cyan-400" },
            { text: "Scalable Architecture", icon: Globe, color: "text-purple-400" },
            { text: "Problem Solving Expert", icon: MessageSquare, color: "text-blue-400" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.3 }}
              className="flex items-center gap-2 sm:gap-3 glass p-2.5 sm:p-3 rounded-xl border-white/5"
            >
              <item.icon size={14} className={`${item.color} shrink-0`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Connecting dots animation */}
      <div className="flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-500"
          />
        ))}
      </div>
    </div>
  );
}
