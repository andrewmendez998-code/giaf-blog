/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:       '#04080f',
        bg2:      '#070d18',
        bg3:      '#0a1120',
        blue:     '#2563eb',
        'blue-lt':'#3b82f6',
        'blue-dim':'#1d4ed8',
        text:     '#e2e8f0',
        muted:    '#7c8fa6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'system-ui', 'sans-serif'],
        mono:  ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
