
"use client";

import React from "react";
import Link from "next/link";
import AnimatedBorderCard from "./AnimatedBorderCard";
import CheckmarkIcon from "./CheckmarkIcon";

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="relative bg-brand-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-brand-text">
            Flexible Plans for Ambitious Brands.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/70 font-satoshi">
            Whether you're launching, growing, or scaling, we have a solution designed for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1: E-commerce Essentials */}
          <AnimatedBorderCard>
            <div className="bg-brand-surface rounded-[15px] h-full w-full p-6 flex flex-col">
              <h3 className="text-2xl font-bold font-satoshi text-brand-text mb-4">E-commerce Essentials</h3>
              <p className="text-4xl font-bold font-satoshi text-brand-accent mb-4">Starting at $300</p>
              <p className="text-brand-text/70 font-satoshi text-base flex-grow mb-6">
                The perfect launchpad to start selling online with a fully functional, professional storefront.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Modern E-commerce Storefront</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Product & Order Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Secure Payment Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Responsive on All Devices</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#" className="flex-1 text-center px-4 py-2.5 text-sm sm:text-base font-bold text-brand-text bg-transparent border-2 border-brand-text/20 rounded-full hover:bg-brand-text/5 hover:border-brand-text/40 transition-all duration-300 whitespace-nowrap block">
                  Choose Plan
                </a>
              </div>
            </div>
          </AnimatedBorderCard>

          {/* Card 2: The Dual-UI Experience (Most Popular) */}
          <AnimatedBorderCard isPopular={true}>
            <div className="bg-brand-surface rounded-[15px] h-full w-full p-6 flex flex-col relative">
                <div className="absolute top-0 right-0 -mt-3 -mr-3">
                    <div className="bg-brand-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Most Popular</div>
                </div>
              <h3 className="text-2xl font-bold font-satoshi text-brand-text mb-4">The Dual-UI Experience</h3>
              <p className="text-4xl font-bold font-satoshi text-brand-accent mb-4">Starting at $500</p>
              <p className="text-brand-text/70 font-satoshi text-base flex-grow mb-6">
                A world-class experience, perfectly tailored for every device, just like the Classy Mart demo.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Everything in Essentials, plus:</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Custom Mobile-First "Flow UI"</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Immersive Desktop "Editorial UI"</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Advanced Performance Optimization</span>
                </li>
              </ul>
              <div className="mt-auto">
                 <a href="#" className="flex-1 text-center px-4 py-2.5 text-sm sm:text-base font-bold text-white bg-brand-accent rounded-full hover:bg-brand-accent/90 transition-all duration-300 shadow-lg shadow-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/40 whitespace-nowrap block">
                    Choose Plan
                </a>
              </div>
            </div>
          </AnimatedBorderCard>

          {/* Card 3: The Automated Commerce Engine */}
          <AnimatedBorderCard>
            <div className="bg-brand-surface rounded-[15px] h-full w-full p-6 flex flex-col">
              <h3 className="text-2xl font-bold font-satoshi text-brand-text mb-4">The Automated Commerce Engine</h3>
              <p className="text-4xl font-bold font-satoshi text-brand-accent mb-4">Starting at $800</p>
              <p className="text-brand-text/70 font-satoshi text-base flex-grow mb-6">
                Your website, supercharged with AI to save you time and scale your sales 24/7.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Everything in Dual-UI, plus:</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">AI-Powered Sales Chatbot</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Automated Social Media Replies</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckmarkIcon className="text-brand-accent" />
                  <span className="text-brand-text/90">Intelligent FAQ Automation</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#" className="flex-1 text-center px-4 py-2.5 text-sm sm:text-base font-bold text-brand-text bg-transparent border-2 border-brand-text/20 rounded-full hover:bg-brand-text/5 hover:border-brand-text/40 transition-all duration-300 whitespace-nowrap block">
                  Choose Plan
                </a>
              </div>
            </div>
          </AnimatedBorderCard>
        </div>

        <div className="text-center mt-20">
          <p className="text-lg text-brand-text/70 font-satoshi">
            Have a unique project in mind?{" "}
            <Link href="/contact" className="text-brand-accent font-bold hover:underline">
              Let's build a custom solution.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
