import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        smm: "8px",
        small: "11px",
        medium: "14px",
        title: "40px",
      },
      colors: {
        background: "#000601",
        primary: "#E3F77A",
        white: "#f9f9f9",
        danger: "#ff0000",
        success: "#00ff00",
        warning: "#f9a826",
        info: "#00bfff",
      },
      fontFamily: {
        sans: ['"Oxanium"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;