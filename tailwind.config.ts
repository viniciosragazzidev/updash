import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#050B19",
        "primary-light": "#DBE9FF",
        "primary-blue": "#0CAFF4",
        "primary-blue-2": "#38BDF5",
        input: "#12192B",
        placeholder: "#DBE9FF",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
