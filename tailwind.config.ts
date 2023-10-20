import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sf-pro-display)',
        lilac: 'var(--font-lilac)',
      },
      colors: {
        zinc: {
          500: '#F2F3F5',
          800: '#1B1B1B'
        },
      }
    },
  },
  plugins: [],
}
export default config
