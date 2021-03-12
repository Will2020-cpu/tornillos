module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        customGray:'#151515',
        customRed : '#C51E2F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
