/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0479C3",
        accent: "#F59E0B",
      },
      width: {
        crtButtonSize: 60,
      },
      height: {
        crtButtonSize: 60,
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scroll: {
          "0%": { left: "0" },
          "100%": { left: "-100%" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [],
};
