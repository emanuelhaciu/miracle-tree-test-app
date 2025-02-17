import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      mainColor: '#F15A29',
      titleColor: '#2B4C7E',
      bodyColor: '#374151',
      linkColor: '#B22222',
    },
  },
  plugins: [],
} satisfies Config;
