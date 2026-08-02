import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#081225',
        'royal-blue': '#1D4ED8',
        'sky-blue': '#60A5FA',
        accent: '#2563EB',
        'accent-light': '#eff6ff',
        'soft-gray': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
