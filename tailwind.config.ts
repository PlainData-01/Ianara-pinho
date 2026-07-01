import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        petrol: {
          DEFAULT: "#123B3E",
          deep: "#0C2A2C",
          soft: "#1C4C4F",
        },
        paper: {
          DEFAULT: "#F3F1EC",
          warm: "#ECE7DC",
        },
        ink: {
          DEFAULT: "#1A2321",
          soft: "#3A4744",
        },
        brass: {
          DEFAULT: "#B8935A",
          deep: "#9A7842",
          soft: "#D6BC8E",
        },
        sage: {
          DEFAULT: "#7A968E",
          light: "#A7BEB7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        display: ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.55" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
