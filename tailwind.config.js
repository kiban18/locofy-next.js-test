/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tailwind-v332-white": "#fff",
        "tailwind-v332-sky-900": "#0c4a6e",
        "tailwind-v332-sky-700": "#0369a1",
        "tailwind-v332-slate-50": "#f8fafc",
        "tailwind-v332-slate-200": "#e2e8f0",
        darkslateblue: "#104d96",
        "dark-gray": "#334158",
        "dark-border": "#435471",
        "margin-nextjsvercelapp-cornflower-blue": "#4c86e7",
        "tailwind-v332-red-600": "#dc2626",
        "tailwind-v332-slate-600": "#475569",
        "tailwind-v332-slate-300": "#cbd5e1",
        "tailwind-v332-white-75": "rgba(255, 255, 255, 0.75)",
        "tailwind-v332-gray-800": "#1f2937",
        "kasprnet-alto": "#dbdbdb",
        "tailwind-v332-black": "#000",
        "tailwind-v332-neutral-300": "#d4d4d4",
        "tailwind-v332-slate-700": "#334155",
      },
      spacing: {},
      fontFamily: {
        "kasprnet-noto-sans-kr-demilight-13": "'Noto Sans KR'",
        "text-large": "Inter",
        "margin-nextjsvercelapp-roboto-bold-15": "Roboto",
        poppins: "Poppins",
      },
    },
    fontSize: {
      smi: "0.813rem",
      mini: "0.938rem",
      sm: "0.875rem",
      base: "1rem",
      "5xl": "1.5rem",
      "45xl": "4rem",
      "9xl": "1.75rem",
      lg: "1.125rem",
      xs: "0.75rem",
      "17xl": "2.25rem",
      "11xl": "1.875rem",
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
