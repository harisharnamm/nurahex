import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          900: "#B3CC19",
          800: "#c4eb17",
          700: "#D7FF1E", // base
          500: "#E6FF5A",
          300: "#F3FF9B",
          DEFAULT: "#D7FF1E",
          foreground: "#0A0A0A",
        },
        accent: {
          600: "#9FF4F0",
          400: "#C1FAF7",
        },
        surface: {
          950: "#000000",
          900: "#0A0A0A",
          700: "#181818",
          600: "#262626",
          400: "#363636",
          200: "#555555",
          50: "#F9F9F9",
        },
        semantic: {
          success: "#4ADE80",
          info: "#38BDF8",
          warning: "#FBBF24",
          danger: "#F87171",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "rgb(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 6px)",
        sm: "calc(var(--radius) - 12px)",
      },
      boxShadow: {
        md: "var(--shadow-md)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"],
        sans: ["var(--font-inter)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
