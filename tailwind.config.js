/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s infinite ease-in",
        fadeInText: "fadeIn 1s ease-in",
        fadeOut: "fadeOut 1.5s infinite ease-out",
        fadeOutText: "fadeOut 1s ease-out",
      },
    },
  },
  plugins: [],
});
