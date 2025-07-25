"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// --- NEW: Import hooks from Next.js for location awareness ---
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- NEW: Get the current page's path and the router instance ---
  const pathname = usePathname();
  const router = useRouter();

  // Update links to have full paths from the root
  const navLinks = [
    { name: "Showcase", href: "/#showcase-section" },
    { name: "Process", href: "/#process" },
    { name: "AI Lab", href: "/#ai-lab" },
  ];

  // --- UPGRADED: The new smooth scroll logic ---
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");

    // If we are already on the homepage, just scroll smoothly.
    if (pathname === "/") {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If we are on another page, navigate to the homepage with the hash.
      // Next.js will handle scrolling to the element with that ID on the new page.
      router.push(href);
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const navVariants = {
    /* ... (no changes here) ... */
  };
  const mobileMenuVariants = {
    /* ... (no changes here) ... */
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full bg-brand-background/80 backdrop-blur-lg border-b border-brand-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-start gap-3 group">
              <Image
                src="/logot.png"
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
                  {/* Use the new onClick handler */}
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
            {/* The contact link also needs the new handler */}
            <a
              href="/#contact"
              onClick={(e) => handleLinkClick(e, "/#contact")}
              className="inline-block rounded-full bg-gradient-to-r from-[#58338a] to-[#9D4EDD] px-8 py-3 text-sm font-satoshi font-normal text-white/90 tracking-wide shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(157,78,221,0.7)]"
            >
              Start a Conversation
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} /* ... */>
              {/* ... icon ... */}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-brand-surface/95"
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
