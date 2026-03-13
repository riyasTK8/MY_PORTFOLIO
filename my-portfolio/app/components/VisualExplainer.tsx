"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface VisualExplainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function VisualExplainer({ children, className = "" }: VisualExplainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldPlay(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative group ${className} min-h-[300px]`}>
      <motion.div
        animate={shouldPlay ? { 
          opacity: 1, 
          scale: 1,
          y: 0 
        } : { 
          opacity: 0, 
          scale: 0.98,
          y: 10 
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass rounded-[2.5rem] p-4 sm:p-8 border-cyan-500/20 glow-cyan/10 aspect-auto min-h-[300px] flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {shouldPlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full relative"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Background circuit pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:20px_20px]" />
      </motion.div>
    </div>
  );
}
