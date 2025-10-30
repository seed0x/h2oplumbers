import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-montserrat)'],
      },
      colors: {
        // H2O Plumbing Brand Colors
        'brand-cyan': {
          DEFAULT: "hsl(var(--brand-cyan))",
          light: "hsl(var(--brand-cyan-light))",
          dark: "hsl(var(--brand-cyan-dark))",
        },
        'brand-turquoise': {
          DEFAULT: 'hsl(var(--brand-turquoise))'
        },
        'brand-black': "hsl(var(--brand-black))",
        'brand-gray': {
          DEFAULT: "hsl(var(--brand-gray))",
          light: "hsl(var(--brand-gray-light))",
          lighter: "hsl(var(--brand-gray-lighter))",
        },
        'brand-white': "hsl(var(--brand-white))",
        
        // System Colors
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-brand': 'var(--gradient-primary)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-secondary': 'var(--gradient-secondary)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-brand': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        flow: {
          '0%': { transform: 'translateX(0) scale(1)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateX(100px) scale(0.5)', opacity: '0' },
        },
        'flow-down': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateY(120px) scale(0.8)', opacity: '0' },
        },
        'flow-right': {
          '0%': { transform: 'translateX(0) scale(1)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateX(140px) scale(0.8)', opacity: '0' },
        },
        'flow-left': {
          '0%': { transform: 'translateX(0) scale(1)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateX(-140px) scale(0.8)', opacity: '0' },
        },
        'drip': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(200px) scale(0.6)', opacity: '0' },
        },
        'flow-out-right': {
          '0%': { transform: 'translateX(0) scale(1)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateX(150px) scale(0.6)', opacity: '0' },
        },
        'flow-out-left': {
          '0%': { transform: 'translateX(0) scale(1)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateX(-150px) scale(0.6)', opacity: '0' },
        },
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
        'float': 'float 3s ease-in-out infinite',
        'pulse-brand': 'pulse-brand 2s ease-in-out infinite',
        'spinner-brand': 'spin 1s linear infinite',
        'flow': 'flow 3s ease-in-out infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
