module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        clr_primary: {
          50: "#D9E0CE", // Lightest shade
          100: "#C4D0AF",
          200: "#9FB484",
          300: "#7A9859",
          400: "#557C2E", // Lighter shade of primary
          500: "#3A5B22", // Primary color
          600: "#314F1E", // Slightly darker
          700: "#273F18",
          800: "#1D2F12",
          900: "#141F0C", // Darkest shade
        },
        clr_secondary: "#f0f2f0",
      },
      screens: {
        largeDESK: "1600px",
        xlargeDESK: "2000px",
      },
    },
  },
  plugins: [],
};
