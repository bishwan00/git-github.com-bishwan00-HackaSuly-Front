/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        // Donate Button Background Color = gray-600
        agreen: {
          50: "#f1fcf5",
          100: "#defaea",
          200: "#bef4d4",
          300: "#8beab3",
          400: "#52d689",
          500: "#2ecc71", // agreen-500 Our Green Color
          600: "#1d9c53",
          700: "#1b7a43",
          800: "#1a6139",
          900: "#175031",
          950: "#072c18",
        },
        ablack: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#414141", // Our text and icon Color
          800: "#383838",
          900: "#313131",
          950: "#1a1a1a",
        },
        abg: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e9e9e9", // Our Background Color
          300: "#d1d1d1",
          400: "#b4b4b4",
          500: "#9a9a9a",
          600: "#818181",
          700: "#6a6a6a",
          800: "#5a5a5a",
          900: "#4e4e4e",
          950: "#282828",
        },

        "rolling-stone": {
          50: "#f5f6f6",
          100: "#e5e7e8",
          200: "#cdd1d4",
          300: "#abb1b5",
          400: "#808a90",
          500: "#707a81", // Donate Button Background Color
          600: "#575e63",
          700: "#4a4f54",
          800: "#414549",
          900: "#3a3d3f",
          950: "#242628",
        },
      },
    },
    plugins: [],
  },
};
