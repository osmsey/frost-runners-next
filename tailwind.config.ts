import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(255, 247, 237)",
          100: "rgb(255, 237, 213)",
          200: "rgb(254, 215, 170)",
          300: "rgb(253, 186, 116)",
          400: "rgb(251, 146, 60)",
          500: "rgb(249, 115, 22)",
          600: "rgb(234, 88, 12)",
          700: "rgb(194, 65, 12)",
          800: "rgb(154, 52, 18)",
          900: "rgb(124, 45, 18)",
        },
        neutral: {
          0: "rgb(255, 255, 255)",
          50: "rgb(248, 250, 252)",
          100: "rgb(241, 245, 249)",
          200: "rgb(226, 232, 240)",
          300: "rgb(203, 213, 225)",
          400: "rgb(148, 163, 184)",
          500: "rgb(100, 116, 139)",
          600: "rgb(71, 85, 105)",
          700: "rgb(51, 65, 85)",
          800: "rgb(30, 41, 59)",
          900: "rgb(15, 23, 42)",
          950: "rgb(2, 6, 23)",
        },
        error: {
          50: "rgb(254, 242, 242)",
          100: "rgb(254, 226, 226)",
          200: "rgb(254, 202, 202)",
          300: "rgb(252, 165, 165)",
          400: "rgb(248, 113, 113)",
          500: "rgb(239, 68, 68)",
          600: "rgb(220, 38, 38)",
          700: "rgb(185, 28, 28)",
          800: "rgb(153, 27, 27)",
          900: "rgb(127, 29, 29)",
        },
        warning: {
          50: "rgb(255, 247, 237)",
          100: "rgb(255, 237, 213)",
          200: "rgb(254, 215, 170)",
          300: "rgb(253, 186, 116)",
          400: "rgb(251, 146, 60)",
          500: "rgb(249, 115, 22)",
          600: "rgb(234, 88, 12)",
          700: "rgb(194, 65, 12)",
          800: "rgb(154, 52, 18)",
          900: "rgb(124, 45, 18)",
        },
        success: {
          50: "rgb(240, 253, 244)",
          100: "rgb(220, 252, 231)",
          200: "rgb(187, 247, 208)",
          300: "rgb(134, 239, 172)",
          400: "rgb(74, 222, 128)",
          500: "rgb(34, 197, 94)",
          600: "rgb(22, 163, 74)",
          700: "rgb(21, 128, 61)",
          800: "rgb(22, 101, 52)",
          900: "rgb(20, 83, 45)",
        },
        "brand-primary": "rgb(234, 88, 12)",
        "default-font": "rgb(15, 23, 42)",
        "subtext-color": "rgb(100, 116, 139)",
        "neutral-border": "rgb(226, 232, 240)",
        white: "rgb(255, 255, 255)",
        "default-background": "rgb(255, 255, 255)",
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "heading-3": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "heading-2": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "heading-1": [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "monospace-body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
      },
      fontFamily: {
        caption: "Montserrat",
        "caption-bold": "Montserrat",
        body: "Montserrat",
        "body-bold": "Montserrat",
        "heading-3": "Montserrat",
        "heading-2": "Montserrat",
        "heading-1": "Montserrat",
        "monospace-body": "monospace",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 16px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)",
        lg: "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
        overlay:
          "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        DEFAULT: "16px",
        lg: "24px",
        full: "9999px",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
