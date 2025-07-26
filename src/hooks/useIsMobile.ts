"use client";

import { useState, useEffect } from "react";

// We define "mobile" as any screen width less than 768px (a standard breakpoint for tablets)
const MOBILE_BREAKPOINT = 768;

export function useIsMobile(): boolean {
  // To prevent errors during server-side rendering, default to a non-mobile value
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This code only runs on the client, after the component has mounted
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Check on initial load
    checkScreenSize();

    // Add event listener for screen resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile;
}
