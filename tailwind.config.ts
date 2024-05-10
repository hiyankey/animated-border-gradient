import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 4s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
