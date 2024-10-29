import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "hsl(var(--background))",
        border: "hsl(var(--doc-border))",
      },
      animation: {
        fadeIn: "fadeInAnimation 150ms ease-in-out",
        fadeOut: "fadeOutAnimation 150ms",
      },
      keyframes: {
        fadeInAnimation: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOutAnimation: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
