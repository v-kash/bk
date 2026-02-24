/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
      },
      colors: {
        primary: "var(--color-primary)",
        primaryDark: "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        light: "var(--color-light)",
        bg: "var(--color-bg)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [],
};
