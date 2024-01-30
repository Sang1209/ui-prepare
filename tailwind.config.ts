import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '108': '432px'
      }
    },
    fontFamily: {
      HelveticaRegular: ["Helvetica-Neue-Regular", "sans-serif"],
      HelveticaLight: ["Helvetica-Neue-Light", "sans-serif"],
      HelveticaMedium: ["Helvetica-Neue-Medium", "sans-serif"],
      HelveticaBold: ["Helvetica-Neue-Bold", "sans-serif"],
    },
    colors: {
      ...colors,
      'primary': '#0D878F',
      'secondary': '#90B3B5',
      'background': "#FAFAFA",
      'white': '#FFFFFF',
      'black': '#000000',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
