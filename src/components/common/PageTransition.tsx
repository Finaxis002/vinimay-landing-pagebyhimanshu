"use client";

import React, { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

export interface PageTransitionContextType {
  navigateWithTransition: (href: string) => void;
}

const PageTransitionContext = React.createContext<PageTransitionContextType>({
  navigateWithTransition: () => {},
});

export const usePageTransition = () => React.useContext(PageTransitionContext);

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const wipeRef = useRef<HTMLDivElement | null>(null);
  const isTransitioningRef = useRef(false);

  // When pathname changes (new page arrived), slide wipe up and out to reveal the new page
  useEffect(() => {
    if (typeof window === "undefined") return;

    const wipe = wipeRef.current;
    if (!wipe) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      wipe.style.display = "none";
      isTransitioningRef.current = false;
      return;
    }

    // Always reset scroll to the top under the cover
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Slide wipe off screen upwards (-100%)
    gsap.fromTo(
      wipe,
      { yPercent: 0 },
      {
        yPercent: -100,
        duration: 0.55,
        ease: "power4.inOut",
        onComplete: () => {
          if (wipe) {
            wipe.style.display = "none";
          }
          isTransitioningRef.current = false;
        },
      }
    );
  }, [pathname]);

  // Trigger smooth wipe upwards (100% -> 0%) before pushing the new route
  const navigateWithTransition = (href: string) => {
    if (typeof window === "undefined") return;

    if (isTransitioningRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      router.push(href, { scroll: true });
      return;
    }

    const wipe = wipeRef.current;
    if (!wipe) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      router.push(href, { scroll: true });
      return;
    }

    isTransitioningRef.current = true;
    wipe.style.display = "flex";

    gsap.fromTo(
      wipe,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.38,
        ease: "power3.inOut",
        onComplete: () => {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          router.push(href, { scroll: true });
        },
      }
    );
  };

  return (
    <PageTransitionContext.Provider value={{ navigateWithTransition }}>
      {/* Wipe Curtain Overlay - Slides in from bottom, slides out to top */}
      <div
        ref={wipeRef}
        id="global-page-wipe"
        aria-hidden="true"
        className="fixed inset-0 z-[9999] pointer-events-none bg-[#fbfbfe] flex items-center justify-center will-change-transform shadow-2xl"
        style={{ display: "none" }}
      >
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8077EC] via-[#6B62D2] to-[#1fb487] opacity-80 shadow-xs" />
      </div>

      {children}
    </PageTransitionContext.Provider>
  );
}
