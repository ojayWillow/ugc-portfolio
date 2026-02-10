import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#faf8f5",   // Lightest beige - almost white
          100: "#f5f0e8",  // Very light beige
          200: "#ebe3d5",  // Light beige
          300: "#dfd2ba",  // Soft beige
          400: "#d4c1a0",  // Medium beige
          500: "#c9b18a",  // Main beige color
          600: "#b89968",  // Darker beige with warmth
          700: "#9d7f4e",  // Rich warm beige
          800: "#7a6138",  // Deep beige brown
          900: "#5c4829",  // Darkest beige brown
        },
        accent: {
          50: "#faf6f3",   // Soft cream
          100: "#f5ede6",  // Light cream
          200: "#e8d5c4",  // Warm cream
          300: "#d9b9a0",  // Peachy beige
          400: "#c9997a",  // Terracotta light
          500: "#b87d5c",  // Terracotta
          600: "#a26548",  // Deep terracotta
          700: "#87503a",  // Rich terracotta
          800: "#6b3d2d",  // Dark terracotta
          900: "#4f2d21",  // Darkest terracotta
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        "scroll-left": "scroll-left var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "scroll-right": "scroll-right var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}

export default config;
