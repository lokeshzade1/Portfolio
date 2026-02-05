/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-glow": "#00f3ff",
        "purple-neon": "#bc13fe",
        "dark-bg": "#050505",
        "glass-white": "rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #00f3ff, 0 0 10px #00f3ff" },
          "100%": { boxShadow: "0 0 20px #00f3ff, 0 0 30px #00f3ff" },
        },
      },
    },
  },
  plugins: [],
};
