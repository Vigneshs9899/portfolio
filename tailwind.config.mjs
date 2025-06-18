import { Inter } from 'next/font/google';


const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        lightHover : '#fcf4ff',
        darkHover : '#2a004a',
        darkTheme : '#11001f',

         // ✅ Text Colors
        textPrimary: '#E4E4E7',     // Light gray - for body text
        textSecondary: '#A1A1AA',   // Subtle gray - for muted labels
        heading: '#F4F4F5',         // Slightly brighter for headings

        // ✅ Accent Colors
        accent: '#7C3AED',         // Violet – links, buttons, highlights
        accentHover: '#A78BFA',    // Lighter violet – hover effect

        // ✅ Utility Colors
        surface: '#1E0837',        // For card backgrounds or sections
        border: '#2D2D3A',         // Divider/border color
        success: '#10B981',        // Green - for alerts/badges
        warning: '#F59E0B',        // Yellow - for warnings
      },

      fontFamily: {

         sans: ["var(--font-inter)", ...fontFamily.sans],

      },

      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      },

      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },

      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },

  darkMode: 'class',
  plugins: [],
};
