import React from 'react';

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
  isPopular?: boolean;
}

const AnimatedBorderCard: React.FC<AnimatedBorderCardProps> = ({ children, className = "", isPopular = false }) => {
  const popularClass = isPopular ? "animated-border-popular" : "";
  return (
    // This div gets our animated-border class from globals.css
    <div className={`animated-border ${popularClass} ${className}`}>
      {/* 
        THE FIX: We add "z-10" here. 
        This lifts the content container above the pseudo-elements (which are at z-index: -1).
      */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorderCard;