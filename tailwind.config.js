/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white1: "#fff",
        white: "#fefeff",
        "text-heading-color": "#1f1f1f",
        dimgray: "#525252",
        gray: {
          "100": "#8a8a8a",
          "200": "#1e1e1e",
          "300": "rgba(0, 0, 0, 0.45)",
        },
        black: "#000",
        "gray-color": "#bebebe",
        gainsboro: "#e6e6e6",
        "gray-2": "#fafafa",
      },
      spacing: {},
      fontFamily: {
        font: "Poppins",
      },
      borderRadius: {
        mini: "15px",
        "21xl": "40px",
        "51xl": "70px",
      },
    },
    fontSize: {
      base: "1rem",
      "31xl": "3.125rem",
      "11xl": "1.875rem",
      "21xl": "2.5rem",
      "48xl": "4.188rem",
      "35xl": "3.375rem",
      "19xl": "2.375rem",
      "4xl": "1.438rem",
      "2xl": "1.313rem",
      mid: "1.063rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
