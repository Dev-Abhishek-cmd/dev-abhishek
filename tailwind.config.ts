import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      black: {
        50: '#f5f5f5',    // Very light grey
        100: '#e0e0e0',   // Light grey
        200: '#b0b0b0',   // Grey
        300: '#808080',   // Dark grey
        400: '#404040',   // Very dark grey
        500: '#000000',   // True black
        600: '#000000',   // Black (same as 500 for demonstration, could use different values if needed)
        700: '#000000',   // Black (same as 500 for demonstration, could use different values if needed)
        800: '#000000',   // Black (same as 500 for demonstration, could use different values if needed)
        900: '#000000',   // Black (same as 500 for demonstration, could use different values if needed)
      },
      grey: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      purple: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#d8b4fe',
        300: '#c084fc',
        400: '#a855f7',
        500: '#9333ea',
        600: '#7e22ce',
        700: '#6b21a8',
        800: '#581c87',
        900: '#4e1d64',
      },
      green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
    },
  },
  plugins: [],
};
export default config;
