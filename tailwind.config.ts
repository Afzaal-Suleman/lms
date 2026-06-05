import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const { fontFamily } = defaultTheme;

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: {
          50: "#e8edf5",
          100: "#c5d0e6",
          200: "#9fb0d5",
          300: "#7890c4",
          400: "#5877b8",
          500: "#3960ab",
          600: "#2c5099",
          700: "#1e3e82",
          800: "#112c6b",
          900: "#0A1F44",
          950: "#060f22",
        },
        teal: {
          400: "#2dd4bf",
          500: "#00C2CB",
          600: "#00a8b0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        display: ["var(--font-playfair)", ...fontFamily.serif],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 20% 50%, hsla(215, 80%, 15%, 0.8) 0, transparent 50%), radial-gradient(at 80% 20%, hsla(185, 100%, 40%, 0.15) 0, transparent 50%), radial-gradient(at 50% 80%, hsla(220, 80%, 12%, 0.9) 0, transparent 60%)",
        "hero-gradient":
          "linear-gradient(135deg, #0A1F44 0%, #0d2a5c 50%, #071529 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "teal-gradient":
          "linear-gradient(135deg, #00C2CB 0%, #0091a8 100%)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
        "counter": "counter 2s ease-out forwards",
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(10, 31, 68, 0.37)",
        "glass-sm": "0 4px 16px 0 rgba(10, 31, 68, 0.2)",
        card: "0 4px 24px rgba(10, 31, 68, 0.08)",
        "card-hover": "0 12px 40px rgba(10, 31, 68, 0.16)",
        teal: "0 8px 30px rgba(0, 194, 203, 0.3)",
        "teal-sm": "0 4px 15px rgba(0, 194, 203, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
