"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CinematicBackground() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-black" />;

  return (
    <div className="fixed inset-0 -z-10 bg-black pointer-events-none overflow-hidden">
      {/* Subtle Mouse-Following Spotlight */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          x: spotlightX,
          y: spotlightY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, rgba(219,39,119,0.03) 30%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Cinematic Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain" />
      </div>

      {/* Floating Energy Orbs (Subtle) */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              opacity: 0 
            }}
            animate={{
              x: [null, Math.random() * 100 + "%"],
              y: [null, Math.random() * 100 + "%"],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: i % 2 === 0 ? "radial-gradient(circle, rgba(34,211,238,0.1), transparent 70%)" : "radial-gradient(circle, rgba(219,39,119,0.1), transparent 70%)",
              filter: "blur(100px)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
