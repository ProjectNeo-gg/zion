module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        purple: {
          dark: '#1D0E22'
        },
        orange: {
          normal: '#F4B459'
        }
      },
      border: {
        orange: {
          normal: '#F4B459'
        }
      },
      width: {
        '77rem': '77rem'
      },
      fontSize: {
        '32px': '2rem',
        '64px': '4rem'
      }
    },
  },
  plugins: [],
}
