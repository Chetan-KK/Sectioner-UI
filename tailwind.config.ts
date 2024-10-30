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
        text: "hsl(var(--text))",
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        muted: "hsl(var(--muted))",
        textForeground: "hsl(var(--text-forground))",
        border: "hsl(var(--border))",
        danger: "hsl(var(--danger))",
        success: "hsl(var(--success))",
      },
      borderRadius: {
        radius: "var(--radius)",
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
