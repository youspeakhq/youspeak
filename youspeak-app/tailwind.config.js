/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#5C2DE1',
          blue: '#1F9DF1',
          gold: '#FFD700',
        },
      },
      fontFamily: {
        spaceGrotesk: ['SpaceGrotesk_500Medium', 'SpaceGrotesk_400Regular'],
      },
    },
  },
  plugins: [],
};
