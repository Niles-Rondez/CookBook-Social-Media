// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans these files
  theme: {
    extend: {
      colors: {
        michelin: "#a53939",
        sunrise: "#f28f3b",
        flaxwhite: "#F5F5F5",
        grey: "#F5F5F5",
        bloodred: "#7B2B2B",
        cloud: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
