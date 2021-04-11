module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'Sarabun',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        'Helvetica Neue',
        'sans-serif',
      ],
      serif: [
        '-apple-system',
        'Sarabun',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
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
    extend: {
      gradientColorStops: ['last'],
      textColor: ['last'],
      backgroundImage: ['last'],
      backgroundClip: ['last'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
