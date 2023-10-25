/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-laptop": "url('/public/laptop.jpeg')",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        "blue-dark": "#0B132B",
        "blue-mid1": "#1C2541",
        "blue-mid2": "#3A506B",
        "cyan": "#5BC0BE",
        "cyan-bright": "#65f2e1",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("@tailwindcss/typography"),
  ],
};
