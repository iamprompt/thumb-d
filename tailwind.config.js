module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'brand-orange': {
          primary: 'var(--color-thumbd-orange-primary)',
          secondary: 'var(--color-thumbd-orange-secondary)',
        },
        'brand-blue': {
          primary: 'var(--color-thumbd-blue-primary)',
          secondary: 'var(--color-thumbd-blue-secondary)',
        },
      },
      gradientColorStops: {
        'brand-orange': {
          primary: 'var(--color-thumbd-orange-primary)',
          secondary: 'var(--color-thumbd-orange-secondary)',
        },
        'brand-blue': {
          primary: 'var(--color-thumbd-blue-primary)',
          secondary: 'var(--color-thumbd-blue-secondary)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
