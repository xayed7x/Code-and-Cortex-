import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Add the `src` directory to all paths
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        "ibm-plex-mono": ["var(--font-ibm-plex-mono)", "monospace"],
      },
      colors: {
        "brand-background": "#0D0D10",
        "brand-surface": "#1A1A1F",
        "brand-text": "#EAEAEB",
        "brand-accent": "#9D4EDD",
        "brand-accent-dark": "#3C096C",
      },
      boxShadow: {
        "glow-accent": "0 0 20px 0 rgba(157, 78, 221, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
