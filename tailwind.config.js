/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "8rem",
      },
    },
    extend: {
      colors: {
        hoverColor: "#EF7C00",
        titleColor: "#2C2D2E",
      },
    },
  },
  plugins: [],
};
