/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        poppins: 'var(--font-poppins)',
      },
      colors: {
        'orange-primary': '#FFB400',
      },
    },
  },
  plugins: [],
}

