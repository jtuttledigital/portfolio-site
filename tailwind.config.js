/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        ink: "#0B0B0C",
        paper: "#FAFAFA",
        mute: "#8a8f98",
      },
      boxShadow: {
        soft: "0 8px 28px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
