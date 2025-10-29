/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config}  */

module.exports = {
   plugins: [
    require('tailwindcss-textshadow')
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'BTitrBd':['BTitrBd'],
      'BNazanin':['BNazanin'],
      'IranianSans':['IranianSans'],
      'BMitra':['BMitra']
      },
    extend: {
      
    },
  },
  plugins: [],
}