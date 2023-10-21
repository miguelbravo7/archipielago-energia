/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./@/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      /* 
      colors: {
        dark: {
          950: "#ffffff", // unused

          900: colors.orange[100], //"#FBEEEB", // background + buttons
          800: colors.orange[200], //"#FFF6EE", // background 2 + card 2 + button gradient-from

          700: colors.orange[300], //"#fe843b", // cards

          600: colors.orange[400], //"#FFA570", // pill gradient-from

          500: "#005CCE", // unused

          400: colors.stone[600], //"#402E32", // subtexto + masked images

          300: colors.stone[700], //"#54433A", // texto normal + icons

          200: "#ff1111", // unused
          100: "#ff1111", // unused
        },
      }, */

      width: {
        18: "4.5rem",
      },

      height: {
        18: "4.5rem",
      },

      inset: {
        "-25": "-6.25rem",
      },

      padding: {
        18: "4.5rem",
        "11/12": "91.666667%",
        "3/2": "150%",
      },

      transitionDuration: {
        250: "250ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
