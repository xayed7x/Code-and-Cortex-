import React from "react";

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingBorder: React.FC<GlowingBorderProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Glows are re-skinned with brand colors */}
      {/* Top-left corner glow - Amethyst/Purple */}
      {/* Top Edge Glows */}
<div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-80 h-40 bg-gradient-radial from-transparent via-brand-secondary-accent/15 to-transparent rounded-full blur-3xl"></div>
<div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-radial from-transparent via-brand-accent/30 to-transparent rounded-full blur-2xl"></div>

{/* Left Edge Glows */}
<div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-80 bg-gradient-radial from-transparent via-brand-secondary-accent/15 to-transparent rounded-full blur-3xl"></div>
<div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-64 bg-gradient-radial from-transparent via-brand-accent/30 to-transparent rounded-full blur-2xl"></div>

{/* A smaller, sharper glow right in the corner to intensify the meeting point */}
<div className="absolute -top-1 -left-1 w-24 h-24 bg-gradient-radial from-transparent via-brand-accent/50 to-transparent rounded-full blur-lg"></div>

     {/* Bottom Edge Glows */}
<div className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 w-80 h-40 bg-gradient-radial from-transparent via-brand-accent/15 to-transparent rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-radial from-transparent via-brand-secondary-accent/30 to-transparent rounded-full blur-2xl"></div>

{/* Right Edge Glows */}
<div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-40 h-80 bg-gradient-radial from-transparent via-brand-accent/15 to-transparent rounded-full blur-3xl"></div>
<div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-32 h-64 bg-gradient-radial from-transparent via-brand-secondary-accent/30 to-transparent rounded-full blur-2xl"></div>

{/* A smaller, sharper glow right in the corner to intensify the meeting point */}
<div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-radial from-transparent via-brand-secondary-accent/50 to-transparent rounded-full blur-lg"></div>

      {/* Your content goes here */}
      <div className="relative rounded-2xl border border-brand-surface/50 bg-brand-background/95 backdrop-blur-sm shadow-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;
