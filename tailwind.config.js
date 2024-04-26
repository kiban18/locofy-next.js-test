/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "localhost-nero": "#fff",
        "localhost-alabaster": "#fafafa",
        "localhost-silver": "#bebebe",
        "localhost-yellow": "#fefeff",
        gainsboro: "#e6e6e6",
        gray: {
          "100": "#8a8a8a",
          "300": "rgba(0, 0, 0, 0.45)",
        },
        "localhost-mine-shaft": "#1f1f1f",
        "localhost-cod-gray": "#1e1e1e",
        dimgray: "#525252",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        font: "Poppins",
      },
      borderRadius: {
        "51xl": "70px",
        "21xl": "40px",
        mini: "15px",
      },
    },
    fontSize: {
      "3xl": "1.375rem",
      "21xl": "2.5rem",
      base: "1rem",
      "31xl": "3.125rem",
      "11xl": "1.875rem",
      "48xl": "4.188rem",
      "35xl": "3.375rem",
      "19xl": "2.375rem",
      "4xl": "1.438rem",
      "2xl": "1.313rem",
      mid: "1.063rem",
      "9xl": "1.75rem",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      tablet: {
        raw: "screen and (max-width: 900px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
