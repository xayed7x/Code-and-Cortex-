"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--mouse-x", `${x}px`);
    btnRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative overflow-hidden rounded-full
        px-8 py-3 
        text-sm tracking-wide text-white font-ibm-plex-mono
        transition-all duration-300
        border border-transparent
        ${className}
      `}
      // THIS IS THE KEY: We set the style directly here.
      style={{
        backgroundColor: "#4a236d", // The solid purple from your screenshot
        boxShadow: "0px 0px 20px 0px rgba(157, 78, 221, 0.3)", // A subtle outer glow
      }}
      {...props}
    >
      {/* The Hover Spotlight - The ONLY hover effect */}
      <div
        className="
          absolute inset-0 z-0
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),_rgba(234,234,235,0.3)_0%,_transparent_30%)]
        "
      />

      {/* The Text, on top */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default ShimmerButton;
