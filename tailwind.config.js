/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
        mono: ['var(--font-fira-code)'],
      },
      colors: {
        primary: '#1A365D',
        secondary: '#2A9D8F',
        accent: '#F4A261',
        text: '#4A5568',
        'light-gray': '#E2E8F0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'retro',
      'cyberpunk',
      'synthwave',
      {
        paper: {
          primary: '#0f172a',
          secondary: '#64748b',
          accent: '#94a3b8',
          neutral: '#475569',
          'base-100': '#f8fafc',
          info: '#0ea5e9',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
      {
        aurora: {
          primary: '#22d3ee',
          secondary: '#a78bfa',
          accent: '#34d399',
          neutral: '#1f2937',
          'base-100': '#0b1020',
          info: '#38bdf8',
          success: '#4ade80',
          warning: '#fbbf24',
          error: '#f87171',
        },
      },
    ],
  },
}
