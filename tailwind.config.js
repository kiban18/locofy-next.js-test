/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "kasprnet-congress-blue": "#023f88",
        darkslateblue: "#104d96",
        gray: {
          "100": "#1a1a1a",
          "200": "#181818",
          "300": "rgba(255, 255, 255, 0.8)",
          "400": "rgba(255, 255, 255, 0.45)",
          "500": "rgba(255, 255, 255, 0.65)",
        },
        "kasprnet-nero": "#fff",
        "kasprnet-black": "#000",
        "kasprnet-alto": "#dbdbdb",
        "kasprnet-mine-shaft": "#333",
        "kasprnet-catskill-white": "#e2ecf1",
        "dark-gray": "#334158",
        "dark-border": "#435471",
      },
      spacing: {},
      fontFamily: {
        "kasprnet-noto-sans-kr-demilight-13": "'Noto Sans KR'",
        "localhost-poppins-regular-16": "Poppins",
        "text-large": "Inter",
      },
    },
    fontSize: {
      smi: "0.813rem",
      mini: "0.938rem",
      sm: "0.875rem",
      base: "1rem",
      "11xl": "1.875rem",
      xs: "0.75rem",
      "17xl": "2.25rem",
      "5xl": "1.5rem",
      lg: "1.125rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1300px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
