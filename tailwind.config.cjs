module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: '#0f0f0f',
        gold: '#d4af37',
        cream: '#f7f4ef'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 8px 30px rgba(212,175,55,0.12)'
      }
    }
  },
  plugins: []
}
