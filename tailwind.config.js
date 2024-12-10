// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleDark: "#5D3B8F", // Dark purple shade
        purple: "#7D54A4", // Medium purple shade
        purpleLight: "#9F79BD", // Light purple shade
        purpleLighter: "#C4A3D4", // Lighter purple shade
        purpleLightest: "#E1D5E9", // Lightest purple shade
      },
      // fontFamily: {
      //   custom: ["YourFontName", "sans-serif"], // Replace 'YourFontName' with the font name
      // },
    },
  },
  plugins: [],
};
