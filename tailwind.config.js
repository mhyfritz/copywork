const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        focus: "0 0 0 3px rgba(159, 166, 178, 0.45)",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "2xl": "1536px",
      },
      spacing: {
        72: "18rem",
        80: "20rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
