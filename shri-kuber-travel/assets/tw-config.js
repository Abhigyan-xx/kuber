tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F0',
        sand: '#EDE4D3',
        sage: { 50: '#F1F6F3', 100: '#DDEAE3', 200: '#BCD5C8', 500: '#5E8C78', 600: '#4A7360', 700: '#3B5D4D', 900: '#22372D' },
        saffron: { 100: '#FCEBCB', 400: '#EDAE4A', 500: '#E19A2B', 600: '#C8821A' },
        ink: '#2B3A33'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(59,93,77,.25)'
      }
    }
  }
};
