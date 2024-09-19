import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#242424"
        },
        active: "#5B5FC7",
        lightBlue: "#00B7C3",
        neutral: {
          100: "#808080"
        }
      },
    },
  },
  plugins: [],
};
export default config;
