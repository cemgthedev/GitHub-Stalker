import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '6xl': '40px',
        '5xl': '36px',
        '4xl': '32px',
        '3xl': '28px',
        '2xl': '24px',
        'xl': '20px',
        'lg': '16px',
        'md': '12px',
        'sm': '8px'
      },
      keyframes: {
        'toast': {
          from: {
            width: '0px',
            opacity: '0'
          },
        },
        'dropdown': {
          from: {
            opacity: '0',
            transform: 'translateY(-16px)'
          }
        }
      },
      animation: {
        'toast': 'toast 350ms linear',
        'dropdown': 'dropdown 150ms ease-in'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
