/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--dark)',
        cream: 'var(--cream-400)',
        lightcream: 'var(--cream-300)',
        lightestcream: 'var(--cream-200)',
      },
      fontSize: {
        tiny: '0.8rem', 
        base:   '1rem',   
        sm:   '1.5rem',   
        md:   '2rem',  
        lg:   '3rem',  
        xl:   '4rem', 
        '2xl':'5rem', 
      },
    },
  },
  plugins: [],
}
