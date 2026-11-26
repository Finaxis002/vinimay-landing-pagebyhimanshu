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
  const CURVE = "0 0 50% 50% / 0 0 9vw 9vw";

  return (
    <>
      {/* Living WebGL 3D Wave Canvas */}
      <HeroWaveCanvas />

      {/* Silk sheen radial overlay matching home page */}
      <div
        className={`hero-silk-sheen absolute inset-0 pointer-events-none ${className}`}
        style={{ borderRadius: CURVE }}
        aria-hidden="true"
      />
    </>
  );
}
