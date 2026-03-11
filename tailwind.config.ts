import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#080810',
        deep: '#0b0b18',
        panel: '#0f0f20',
        gold: '#d4af37',
        'gold-light': '#f0d060',
        cream: '#f5ead8',
        parchment: '#e8d5b0',
        text: '#c8b888',
        muted: '#7a6a4a',
        star: '#a0c8ff',
        qadr: '#b89aff',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cinzel', 'serif'],
        arabic: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
