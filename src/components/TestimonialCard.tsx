import React from "react";

// ... (PlaceholderIcon component remains the same)
const PlaceholderIcon: React.FC = () => (
  <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#0D0D10] rounded-full border-2 border-[#9D4EDD]/30">
    <svg
      className="w-8 h-8 text-[#9D4EDD]/50"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  </div>
);

// Add an optional className to our props interface
interface TestimonialCardProps {
  quote: string;
  attribution: string;
  className?: string; // <-- ADD THIS LINE
}

// Destructure className and apply it to the root div
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  attribution,
  className,
}) => {
  return (
    <div
      className={`bg-[#1A1A1F] border border-[#9D4EDD]/20 rounded-xl p-8 flex flex-col h-full opacity-0 ${className}`}
    >
      {/* The rest of the component is unchanged */}
      <PlaceholderIcon />
      <blockquote className="flex-grow">
        <p className="text-lg text-[#EAEAEB] font-sans italic leading-relaxed">
          "{quote}"
        </p>
      </blockquote>
      <footer className="mt-6">
        <p className="text-right font-mono text-sm text-[#9D4EDD]">
          {attribution}
        </p>
      </footer>
    </div>
  );
};

export default TestimonialCard;
