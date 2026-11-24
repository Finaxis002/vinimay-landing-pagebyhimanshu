"use client";

import React, { useCallback, useEffect, useRef } from "react";
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
  const accentRef = useRef<HTMLDivElement | null>(null);
  const isTransitioningRef = useRef(false);

  const hideLayers = useCallback(() => {
    if (wipeRef.current) wipeRef.current.style.display = "none";
    if (accentRef.current) accentRef.current.style.display = "none";
    isTransitioningRef.current = false;
  }, []);

  // Slide both layers up and out: cream leads, purple trails behind it
  const slideOut = useCallback(
    (duration = 0.55) => {
      const wipe = wipeRef.current;
      const accent = accentRef.current;
      if (!wipe || !accent) {
        hideLayers();
        return;
      }

      gsap.killTweensOf([wipe, accent]);

      gsap.fromTo(
        wipe,
        { yPercent: 0 },
        { yPercent: -100, duration, ease: "power4.inOut" }
      );

      gsap.fromTo(
        accent,
        { yPercent: 0 },
        {
          yPercent: -100,
          duration,
          delay: 0.1,
          ease: "power4.inOut",
          onComplete: hideLayers,
        }
      );
    },
    [hideLayers]
  );

  // When pathname changes (new page arrived), reveal the new page
  useEffect(() => {
    if (typeof window === "undefined") return;

    const wipe = wipeRef.current;
    const accent = accentRef.current;
    if (!wipe || !accent) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      hideLayers();
      return;
    }

    // Always reset scroll to the top under the cover
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    slideOut(0.55);
  }, [pathname, slideOut, hideLayers]);

  // Trigger smooth wipe upwards (100% -> 0%) before pushing the new route
  const navigateWithTransition = (href: string) => {
    if (typeof window === "undefined") return;

    if (isTransitioningRef.current) return;

    const targetPath = href.split("?")[0].split("#")[0];
    const isSamePage = targetPath === pathname;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const wipe = wipeRef.current;
    const accent = accentRef.current;

    if (prefersReducedMotion || !wipe || !accent) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (!isSamePage) {
        router.push(href, { scroll: true });
      }
      return;
    }

    isTransitioningRef.current = true;
    wipe.style.display = "flex";
    accent.style.display = "block";

    gsap.killTweensOf([wipe, accent]);

    // Purple accent layer leads in
    gsap.fromTo(
      accent,
      { yPercent: 100 },
      { yPercent: 0, duration: 0.38, ease: "power3.inOut" }
    );

    // Cream layer follows slightly behind, on top
    gsap.fromTo(
      wipe,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.38,
        delay: 0.12,
        ease: "power3.inOut",
        onComplete: () => {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });

          if (isSamePage) {
            // Already on this page: Next.js won't fire a pathname change,
            // so slide the layers off ourselves so they never get stuck.
            slideOut(0.55);
          } else {
            router.push(href, { scroll: true });
          }
        },
      }
    );

    // Fail-safe timeout: guarantees the curtain never gets stuck if router stalls
    setTimeout(() => {
      if (isTransitioningRef.current && wipeRef.current && accentRef.current) {
        gsap.to(wipeRef.current, {
          yPercent: -100,
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(accentRef.current, {
          yPercent: -100,
          duration: 0.4,
          delay: 0.08,
          ease: "power3.out",
          onComplete: hideLayers,
        });
      }
    }, 2500);
  };

  return (
    <PageTransitionContext.Provider value={{ navigateWithTransition }}>
      {/* Accent layer (#8E85F8) - sits just beneath the cream wipe */}
      <div
        ref={accentRef}
        id="global-page-wipe-accent"
        aria-hidden="true"
        className="fixed inset-0 z-[9998] pointer-events-none bg-[#8E85F8] will-change-transform"
        style={{ display: "none" }}
      />

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