/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "PC": "#A4F4F2",
      "Lic": "#A0C4FF",
      "Esp": "#A0C4FF",
      "ElecLic": "#C1FBA4",
      "ElecEsp": "#7BF1A8",
      "FG": "#FFADAD",
      "IN": "#FDFFB6",
      "TI": "#FFD6E0",
      "PF": "#FFEF9F",
      "AP": "#9BC53D"
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}

