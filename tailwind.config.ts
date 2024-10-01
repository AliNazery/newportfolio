import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1399.98px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        text1: "hsla(0, 0%, 100%, .8);",
      },
      scale: {
        "115": "1.15",
      },
      boxShadow: {
        custom: "0 5px 20px 0 rgba(69, 67, 96, 0.1)",
      },
    },
    fontSize: {
      h6: ["18px", { lineHeight: "1.4" }],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-pseudo-elements")({
      customPseudoElements: ["after", "before"],
      contentUtilities: true,
      emptyContent: true,
      classNameReplacer: {
        after: "after",
        before: "before",
      },
    }),
  ],
};
export default config;
