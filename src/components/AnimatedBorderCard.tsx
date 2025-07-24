import React from 'react';

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBorderCard: React.FC<AnimatedBorderCardProps> = ({ children, className = "" }) => {
  return (
    // This div gets our animated-border class from globals.css
    <div className={`animated-border ${className}`}>
      {/* 
        THE FIX: We add "z-10" here. 
        This lifts the content container above the pseudo-elements (which are at z-index: -1).
      */}
      <div className="relative z-10 bg-brand-surface rounded-[15px] h-full w-full p-6">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorderCard;