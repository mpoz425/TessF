/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm paper surfaces
        paper: {
          DEFAULT: '#FCFAF6',
          alt: '#F5F1E9',
          deep: '#EDE7DC',
        },
        rule: '#E2DACB',
        // Ink scale — `mute` and lighter are decorative only
        ink: {
          DEFAULT: '#17181B',
          soft: '#3D4048',
          mute: '#6B6F79',
          faint: '#9A9EA8',
        },
        // Primary accent
        clay: {
          DEFAULT: '#A8442C',
          50: '#FAF0EC',
          100: '#F1D9D0',
          200: '#E4B7A7',
          600: '#A8442C',
          700: '#8A3722',
          800: '#6B2B1A',
        },
        // Secondary accent — awards, code, data links
        moss: {
          DEFAULT: '#2F5F5B',
          50: '#E7EFED',
          100: '#CFDFDC',
          700: '#244B47',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Editorial display sizes with tightened tracking baked in
        'display-sm': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['4rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-xl': ['5rem', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.16em' }],
      },
      maxWidth: {
        prose: '68ch',
        shell: '78rem',
        reading: '46rem',
      },
      boxShadow: {
        lift: '0 1px 2px rgba(23, 24, 27, 0.04), 0 8px 24px -12px rgba(23, 24, 27, 0.12)',
        'lift-lg': '0 2px 4px rgba(23, 24, 27, 0.04), 0 24px 48px -20px rgba(23, 24, 27, 0.18)',
      },
      borderRadius: {
        card: '0.75rem',
      },
      keyframes: {
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.soft'),
            '--tw-prose-headings': theme('colors.ink.DEFAULT'),
            '--tw-prose-links': theme('colors.clay.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink.DEFAULT'),
            '--tw-prose-counters': theme('colors.ink.mute'),
            '--tw-prose-bullets': theme('colors.clay.200'),
            '--tw-prose-quotes': theme('colors.ink.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.clay.200'),
            '--tw-prose-hr': theme('colors.rule'),
            maxWidth: '68ch',
            a: {
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
