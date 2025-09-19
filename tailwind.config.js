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
        blue: 'var(--blue)',
        cream: 'var(--cream)',
        yellow: 'var(--yellow)',
        rust: 'var(--rust)',
        
      },
      fontSize: {
        tiny: '0.8rem', 
        sm:   '1rem',   
        md:   '2rem',  
        lg:   '3rem',  
        xl:   '4rem', 
        '2xl':'5rem', 
      },
    },
  },
  plugins: [],
}
