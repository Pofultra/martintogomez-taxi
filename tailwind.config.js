/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // yellow: {
        //   400: "#F2C94C",
        //   500: "#F2C94C",
        // },
        // black: {
        //   900: "#1D1D1D",
        // },
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
