"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Stars } from "@react-three/drei";
import { useState, useRef, Suspense } from "react";
import { useScroll } from "framer-motion";
import * as THREE from "three";

function Starfield() {
  const ref = useRef<THREE.Points>(null!);
  const { scrollYProgress } = useScroll();
  const [sphere] = useState(() => {
    const coords = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
        const i3 = i * 3;
        coords[i3] = (Math.random() - 0.5) * 50;
        coords[i3 + 1] = (Math.random() - 0.5) * 50;
        coords[i3 + 2] = (Math.random() - 0.5) * 50;
    }
    return coords;
  });

  useFrame((state, delta) => {
    // Continuous rotation
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
    
    // Scroll-based tilt
    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      scrollYProgress.get() * Math.PI * 0.5,
      0.1
    );
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#db2777"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.NormalBlending}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black pointer-events-none" />
  );
}
