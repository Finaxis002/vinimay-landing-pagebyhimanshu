"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures whenever a user navigates between pages (e.g. going to any feature page
 * or returning to the home page), the viewport immediately resets to the very top.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Avoid interrupting deliberate hash anchor navigations (e.g. /#the-features)
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }
  }, [pathname]);

  return null;
}
