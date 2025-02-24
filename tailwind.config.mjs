import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'starry-sky': "url('/starry-sky.jpg')",
      },
      colors: {
        text: colors.black,
        bg: colors.neutral[100],
        secondary: colors.neutral[900],
        section: colors.white,
        "secondary-item": colors.neutral[800],
        hint: colors.neutral[500],
      },
    },
  },
  plugins: [],
};
