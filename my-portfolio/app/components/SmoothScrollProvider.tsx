"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface Props {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
