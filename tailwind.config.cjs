/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'rich-black': '#020209',
        secondary: 'rgba(255, 255, 255, 0.7)',
        tertiary: 'rgba(255, 255, 255, 0.35)',
        panel: '#0f0f15',
        'panel-hover': '#1a1a25',
        discord: '#5A65EA',
        'discord-hover': '#6a74ec',
        twitch: '#874BF6',
        'twitch-hover': '#935cf6',
        link: '#D94977',
        border: '#1b1d2a',
        'white-60': 'rgba(255, 255, 255, 0.6)',
      },
      boxShadow: {
        'hero-cta':
          '0px 4px 8px rgba(0, 0, 0, 0.25), inset 0px 2px 0px 0px ' +
          'rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'smooth-enter-top': 'slide-in-top 1.6s ease-out, fade-in 1.6s ease-out',
        'smooth-enter-bottom':
          'slide-in-bottom 1.6s ease-out, fade-in 1.6s ease-out',
      },
      keyframes: {
        'slide-in-top': {
          '0%': { transform: 'translateY(-2%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(5%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out-top': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2%)' },
        },
        'slide-out-bottom': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(5%)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
    fontFamily: {
      body: [
        ['Inter', ...defaultTheme.fontFamily.sans],
        { fontFeatureSettings: '"ss01", "ss02"' },
      ],
      heading: [
        ['Cal Sans', ...defaultTheme.fontFamily.sans],
        { fontFeatureSettings: '"ss02"' },
      ],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/container-queries'),
  ],
}
