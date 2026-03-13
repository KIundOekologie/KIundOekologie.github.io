import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#F4F1EA',
        'text-main': '#2A2A28',
        'accent-terra': '#B85D43',
        'accent-flora': '#6A7B59',
        'dark-slate': '#3B3936',
        'border-color': '#D1CEC5',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
        'hero-lg': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '400' }],
        'section-title': ['2rem', { lineHeight: '1.3', letterSpacing: '0.01em', fontWeight: '400' }],
        'section-title-lg': ['2.5rem', { lineHeight: '1.25', letterSpacing: '0.005em', fontWeight: '400' }],
        'micro': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '500' }],
        'micro-lg': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '500' }],
      },
      maxWidth: {
        'readable': '65ch',
      },
      letterSpacing: {
        'wide-plus': '0.15em',
        'micro': '0.05em',
        'tight-hero': '-0.02em',
        'tight-hero-lg': '-0.03em',
      },
      lineHeight: {
        'readable': '1.7',
        'relaxed': '1.8',
      },
      spacing: {
        'section': '8rem',
        'section-lg': '12rem',
      },
      backdropBlur: {
        'glass': '12px',
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJnoiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjg1IiBudW1PY3RhdmVzTMiMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNnKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')",
        'lined-paper': 'repeating-linear-gradient(transparent, transparent 31px, #D1CEC5 31px, #D1CEC5 32px)',
      },
    },
  },
  plugins: [],
};
export default config;
