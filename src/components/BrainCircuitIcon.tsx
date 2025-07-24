import React from 'react';

// A bespoke icon representing the AI Core.
const BrainCircuitIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 2a10 10 0 0 0-3.54 19.54" />
      <path d="M12 2a10 10 0 0 1 3.54 19.54" />
      <path d="M4 12H2" />
      <path d="M22 12h-2" />
      <path d="M12 4V2" />
      <path d="M12 22v-2" />
      <path d="M17.66 6.34l-1.42-1.42" />
      <path d="M6.34 17.66l-1.42-1.42" />
      <path d="M17.66 17.66l-1.42 1.42" />
      <path d="M6.34 6.34l-1.42 1.42" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
    </svg>
  );
};

export default BrainCircuitIcon;