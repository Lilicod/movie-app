/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1FB0E5",
        purple: "#CA06FB",
        pink: "#DE1291",
        //Body colors
        darkBlue: "#240E4A",
        midBlue: "#5427A1",
        darkPurple: "#8311B8",
        //nav
        navbar: "#460A6F",
        

      },
      fontFamily: {
        young: ["Young Serif", "serif"],
        atkinson: ["Atkinson Hyperlegible", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
