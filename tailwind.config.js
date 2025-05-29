/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        heading: ["Arial", "ui-sans-serif", "sans-serif"],
      },
      screens: {
        sm: "600px",
        md: "800px",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#FF0000", // Pure red
          50: "#FFF5F5",
          100: "#FFE6E6",
          200: "#FFCCCC",
          300: "#FF9999",
          400: "#FF6666",
          500: "#FF3333",
          600: "#FF0000",
          700: "#CC0000",
          800: "#990000",
          900: "#660000",
        },
      },
    },
  },
  plugins: [],
};
