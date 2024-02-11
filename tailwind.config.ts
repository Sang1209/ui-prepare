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
      'primary': '#B47B84',
      'secondary': '#CAA6A6',
      'background': "#FAFAFA",
      'dark-900': "#121212",
      'dark-800': "#1E1E1E",
      'dark-700': "#232323",
      'dark-600': '#252525',
      'dark-500': '#272727',
      'dark-400': '#2C2C2C',
      'dark-300': '#2E2E2E',
      'dark-200': '#333333',
      'dark-100': '#363636',
      'dark-0': '#383838',
      'white': '#FFFFFF',
      'black': '#000000',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
