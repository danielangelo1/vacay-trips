/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "search-background": "url(/world-map.png))",
      },
      colors: {
        primary: "#00aef3",
        primaryDarker: "#013b6b",
        secondary: "#353977",
        grayPrimary: "#717171",
        grayLighter: "#BBBFBF",
      },
      textColor: {
        dark: "#717171",
      },
    },
  },
  plugins: [],
};
