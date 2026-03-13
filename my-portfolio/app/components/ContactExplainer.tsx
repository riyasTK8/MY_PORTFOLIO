"use client";

import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, Wifi } from "lucide-react";

export default function ContactExplainer() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
      <div className="relative w-full h-40 flex items-center justify-center">
        {/* Connection Circle */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 mx-auto w-32 h-32 border border-dashed border-cyan-500/20 rounded-full"
        />

        {/* Central Mail Icon */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-20 h-20 rounded-[2rem] glass border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.2)]"
        >
          <Mail size={40} />
        </motion.div>

        {/* Transmitting Signal */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2, delay: i * 0.6, repeat: Infinity }}
            className="absolute w-20 h-20 border border-cyan-500/30 rounded-full"
          />
        ))}

        {/* Binary Stream */}
        <div className="absolute top-0 right-0 h-full w-12 flex flex-col gap-2 overflow-hidden opacity-20">
           {Array.from({ length: 4 }).map((_, i) => (
             <motion.span 
               key={i} 
               animate={{ y: [-50, 200] }} 
               transition={{ duration: 4, delay: i * 1, repeat: Infinity, ease: "linear" }}
               className="text-[8px] font-mono text-cyan-500"
             >
               {Math.random() > 0.5 ? "10101" : "01011"}
             </motion.span>
           ))}
        </div>
      </div>

      <div className="glass bg-black/40 p-6 rounded-3xl border border-white/5 w-full space-y-4">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
           <span>Connection Status</span>
           <motion.div 
            animate={{ opacity: [0, 1] }} 
            className="text-cyan-500 flex items-center gap-1"
           >
             <Wifi size={10} /> Live
           </motion.div>
        </div>

        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
           <motion.div 
             animate={{ width: ["0%", "100%"] }} 
             transition={{ duration: 2, repeat: Infinity }}
             className="h-full bg-cyan-500"
           />
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
           <Send size={14} className="text-cyan-400" />
           <span className="font-mono">Ready to establish connection...</span>
        </div>
      </div>

      <div className="flex gap-4">
         {[CheckCircle, Smartphone, Globe].map((Icon, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2 + i * 0.2 }}
             className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-500"
           >
             <Icon size={14} />
           </motion.div>
         ))}
      </div>
    </div>
  );
}

// Fixed missing icon imports
import { Globe, Smartphone } from "lucide-react";
