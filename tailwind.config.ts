import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        surface: "#131313",
        "surface-container": "#1f1f1f",
        "surface-container-low": "#1b1b1b",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353535",
        "on-background": "#e2e2e2",
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#c4c7c7",
        primary: "#c9c6c5",
        "primary-container": "#0a0a0a",
        "primary-fixed": "#e5e2e1",
        secondary: "#c6c6c7",
        "secondary-container": "#454747",
        "on-secondary": "#2f3131",
        "on-secondary-container": "#b4b5b5",
        tertiary: "#ffb4a8",
        "tertiary-container": "#200000",
        "on-tertiary-container": "#db4231",
        accent: "#db4231",
        "accent-ice": "#8e9192",
        outline: "#8e9192",
        "outline-variant": "#444748",
        muted: "#8e9192",
      },
      fontFamily: {
        serif: ["'Bodoni Moda'", "serif"],
        headline: ["'Bodoni Moda'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'JetBrains Mono'", "monospace"],
      },
      spacing: {
        unit: "8px",
        "container-max": "1440px",
        "margin-mobile": "24px",
        "margin-desktop": "64px",
        "section-gap": "160px",
        gutter: "32px",
      },
      letterSpacing: {
        cinematic: "0.25em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
