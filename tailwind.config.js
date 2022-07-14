/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00717D",
        baseText: "#ffffff",
        inputBg: "#F5F5F5",
        headerBg: "#EBEBEB",
        btnRed: "#E35E5E",
        lightGray: "rgba(255, 255, 255, 0.2)",
      },
      borderRadius: {
        bottonRadius: "0.3125rem",

        full: "100%",
        half: "50%",
        quater: "25%",
        textRounded: "0.237059375rem",
      },
      height: {
        inputHeight: "3.75rem",
      },
      width: {
        homeInput: "17.3125rem",
        homeLongInput: "36.5",
      },
    },
  },
  plugins: [],
};
