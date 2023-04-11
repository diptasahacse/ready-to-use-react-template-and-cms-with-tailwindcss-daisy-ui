/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e3ffe6",
          secondary: "#111827",
          accent: "#6b7280",
          neutral: "#13224f",
          "base-100": "#FFFFFF",
          "base-200": "#c4c8d3",
          info: "#091945",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
