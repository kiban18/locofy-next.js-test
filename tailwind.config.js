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
        "tailwind-v332-slate-300": "#cbd5e1",
        "tailwind-v332-slate-700": "#334155",
        "tailwind-v332-slate-50": "#f8fafc",
        "tailwind-v332-slate-200": "#e2e8f0",
        "tailwind-v332-white-75": "rgba(255, 255, 255, 0.75)",
        "tailwind-v332-gray-800": "#1f2937",
        "kasprnet-alto": "#dbdbdb",
        "tailwind-v332-neutral-300": "#d4d4d4",
        "tailwind-v332-black": "#000",
        "tailwind-v332-sky-900": "#0c4a6e",
        "tailwind-v332-sky-700": "#0369a1",
        darkslateblue: "#104d96",
        "margin-nextjsvercelapp-cornflower-blue": "#4c86e7",
        "tailwind-v332-red-600": "#dc2626",
        "tailwind-v332-slate-600": "#475569",
        "dark-gray": "#334158",
        "dark-border": "#435471",
      },
      spacing: {},
      fontFamily: {
        "text-large": "Inter",
        "kasprnet-noto-sans-kr-demilight-13": "'Noto Sans KR'",
        poppins: "Poppins",
        "margin-nextjsvercelapp-roboto-bold-15": "Roboto",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      smi: "0.813rem",
      mini: "0.938rem",
      xs: "0.75rem",
      "17xl": "2.25rem",
      "5xl": "1.5rem",
      "11xl": "1.875rem",
      lg: "1.125rem",
      "45xl": "4rem",
      "9xl": "1.75rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
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
