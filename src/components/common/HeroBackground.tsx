"use client";

import React from "react";
import HeroWaveCanvas from "./HeroWaveCanvas";

export interface HeroBackgroundProps {
  className?: string;
}

/**
 * Reusable HeroBackground component
 * Matches the living WebGL silk wave canvas and rounded card styling from the home page hero section.
 * Can be reused across any feature or marketing page.
 */
export default function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none z-0 ${className}`}
    >
      <HeroWaveCanvas speed={1} />
    </div>
  );
}
