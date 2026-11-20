"use client";

import React from "react";

interface OsmoRollProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function OsmoRoll({
  children,
  className = "",
  fullWidth = false,
}: OsmoRollProps) {
  return (
    <span
      className={`osmo-roll ${fullWidth ? "osmo-roll-full" : ""} ${className}`}
    >
      <span className="osmo-roll-track">
        <span className="osmo-roll-item">{children}</span>
        <span className="osmo-roll-item clone" aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  );
}
