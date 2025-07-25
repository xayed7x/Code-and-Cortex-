"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Showcase", href: "/#showcase-section" },
    { name: "Process", href: "/#process" },
    { name: "AI Lab", href: "/#ai-lab" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");

    if (pathname === "/") {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    // THE FIX: Add `relative` to make this the positioning context for the absolute menu
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full bg-brand-background/80 backdrop-blur-lg border-b border-brand-surface relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-start gap-3 group">
              <Image
                src="/logo.png"
                alt="Code & Cortex Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110 mt-1"
              />
              <div className="flex flex-col">
                <span className="font-semibold tracking-wider uppercase font-satoshi text-base text-brand-text group-hover:text-brand-accent transition-colors duration-300 leading-tight">
                  Code
                </span>
                <span className="font-semibold tracking-wider uppercase font-satoshi text-base text-brand-text group-hover:text-brand-accent transition-colors duration-300 leading-tight">
                  & Cortex
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-satoshi text-brand-text/70 hover:text-brand-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <a
              href="/#contact"
              onClick={(e) => handleLinkClick(e, "/#contact")}
              className="inline-block rounded-full bg-gradient-to-r from-[#58338a] to-[#9D4EDD] px-8 py-3 text-sm font-satoshi font-normal text-white/90 tracking-wide shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(157,78,221,0.7)]"
            >
              Start a Conversation
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-brand-text/70 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU PANEL: MOVED OUTSIDE THE FLEX CONTAINER & POSITIONED ABSOLUTELY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-brand-surface/95 backdrop-blur-md md:hidden"
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-3 py-3 rounded-md text-center text-base font-satoshi text-brand-text hover:bg-brand-background hover:text-brand-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="py-4 px-5">
              <a
                href="/#contact"
                onClick={(e) => handleLinkClick(e, "/#contact")}
                className="block text-center rounded-full bg-brand-accent px-6 py-3 font-satoshi font-medium text-white w-full"
              >
                Start a Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
