/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"; // Import Tailwind plugin function

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.4xl") },
        h2: { fontSize: theme("fontSize.2xl") },
        h3: { fontSize: theme("fontSize.xl") },
        h4: { fontSize: theme("fontSize.lg") },
        h5: { fontSize: theme("fontSize.lg") },
        h6: { fontSize: theme("fontSize.base") },
      });
    }),
  ],
};
