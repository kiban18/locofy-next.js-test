/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "margin-nextjsvercelapp-nero": "#fff",
        "margin-nextjsvercelapp-cornflower-blue": "#4c86e7",
        "margin-nextjsvercelapp-carnation": "#fa6262",
        crimson: "#e04747",
        "margin-nextjsvercelapp-slate-gray": "#6a798c",
        "margin-nextjsvercelapp-gull-gray": "#94a3b8",
        "margin-nextjsvercelapp-rhino": "#333b69",
        "localhost-alabaster": "#fafafa",
        "localhost-silver": "#bebebe",
        "localhost-yellow": "#fefeff",
        gainsboro: "#e6e6e6",
        gray: "#8a8a8a",
        "localhost-mine-shaft": "#1f1f1f",
        "localhost-cod-gray": "#1e1e1e",
      },
      spacing: {},
      fontFamily: {
        "margin-nextjsvercelapp-roboto-regular-24": "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "51xl": "70px",
        "21xl": "40px",
      },
    },
    fontSize: {
      mini: "0.938rem",
      base: "1rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "45xl": "4rem",
      "19xl": "2.375rem",
      "32xl": "3.188rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      xs: "0.75rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
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
