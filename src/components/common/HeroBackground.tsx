"use client";

import React from "react";
import HeroWaveCanvas from "./HeroWaveCanvas";

export interface HeroBackgroundProps {
  className?: string;
}

/**
 * Reusable HeroBackground component
 * Matches the living WebGL silk wave canvas and radial sheen overlay from the home page hero section.
 * Can be reused across any feature or marketing page.
 */
export default function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <>
      {/* Living WebGL 3D Wave Canvas */}
      <HeroWaveCanvas />

      {/* Silk sheen radial overlay matching home page */}
      <div
        className={`hero-silk-sheen absolute inset-0 pointer-events-none rounded-none sm:rounded-[2.5rem] ${className}`}
        aria-hidden="true"
      />
    </>
  );
}
