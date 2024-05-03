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
        "tailwind-v332-black": "#000",
        "dark-gray": "#334158",
        "dark-border": "#435471",
        "margin-nextjsvercelapp-cornflower-blue": "#4c86e7",
        "tailwind-v332-red-600": "#dc2626",
        "tailwind-v332-slate-600": "#475569",
        "tailwind-v332-slate-300": "#cbd5e1",
        "tailwind-v332-white-75": "rgba(255, 255, 255, 0.75)",
        "tailwind-v332-gray-800": "#1f2937",
        "kasprnet-alto": "#dbdbdb",
        "tailwind-v332-slate-200": "#e2e8f0",
        "tailwind-v332-sky-900": "#0c4a6e",
        "tailwind-v332-neutral-300": "#d4d4d4",
        "tailwind-v332-sky-700": "#0369a1",
        "tailwind-v332-slate-50": "#f8fafc",
        darkslateblue: "#104d96",
        "tailwind-v332-slate-700": "#334155",
        "tailwind-v332-zinc-50": "#fafafa",
        darkslategray: "#404040",
        "tailwind-v332-gray-900": "#111827",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "text-large": "Inter",
        "margin-nextjsvercelapp-roboto-bold-15": "Roboto",
        "kasprnet-noto-sans-kr-demilight-14": "'Noto Sans KR'",
      },
    },
    fontSize: {
      base: "1rem",
      mini: "0.938rem",
      "5xl": "1.5rem",
      "45xl": "4rem",
      "9xl": "1.75rem",
      lg: "1.125rem",
      xs: "0.75rem",
      "17xl": "2.25rem",
      sm: "0.875rem",
      "11xl": "1.875rem",
      smi: "0.813rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1300px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
