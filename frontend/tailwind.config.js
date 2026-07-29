/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Core brand tokens (from design references)
        surface: '#f8f9ff',
        'surface-dim': '#d0dbed',
        'surface-bright': '#f8f9ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#eff4ff',
        'surface-container': '#e6eeff',
        'surface-container-high': '#dee9fc',
        'surface-container-highest': '#d9e3f6',
        'on-surface': '#121c2a',
        'on-surface-variant': '#444651',
        'inverse-surface': '#27313f',
        'inverse-on-surface': '#eaf1ff',
        outline: '#757682',
        'outline-variant': '#c5c5d3',
        'surface-tint': '#4059aa',
        primary: '#00236f',
        'on-primary': '#ffffff',
        'primary-container': '#1e3a8a',
        'on-primary-container': '#90a8ff',
        'inverse-primary': '#b6c4ff',
        secondary: '#006a63',
        'on-secondary': '#ffffff',
        'secondary-container': '#99efe5',
        'on-secondary-container': '#006f67',
        tertiary: '#382700',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#533c00',
        'on-tertiary-container': '#d8a31b',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        'primary-fixed': '#dce1ff',
        'primary-fixed-dim': '#b6c4ff',
        'on-primary-fixed': '#00164e',
        'on-primary-fixed-variant': '#264191',
        'secondary-fixed': '#9cf2e8',
        'secondary-fixed-dim': '#80d5cb',
        'on-secondary-fixed': '#00201d',
        'on-secondary-fixed-variant': '#00504a',
        'tertiary-fixed': '#ffdfa0',
        'tertiary-fixed-dim': '#f6be39',
        'on-tertiary-fixed': '#261a00',
        'on-tertiary-fixed-variant': '#5c4300',
        background: '#f8f9ff',
        'on-background': '#121c2a',
        'surface-variant': '#d9e3f6'
      },
      spacing: {
        // Custom spacing tokens (use classes like p-stack-lg, mb-stack-md, gap-base)
        'base': '8px',
        'stack-sm': '8px',
        'stack-md': '16px',
        'stack-lg': '32px',
        'gutter': '24px',
        'container-max': '1280px',
        'margin-mobile': '16px',
        'margin-desktop': '40px'
      },
      fontFamily: {
        'display-lg': ['Poppins', 'sans-serif'],
        'headline-lg': ['Poppins', 'sans-serif'],
        'headline-md': ['Poppins', 'sans-serif'],
        'headline-lg-mobile': ['Poppins', 'sans-serif'],
        'title-lg': ['Poppins', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'label-md': ['Inter', 'sans-serif'],
        'label-sm': ['Inter', 'sans-serif']
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-lg-mobile': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'title-lg': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '500' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '600' }]
      },
      borderRadius: {
        'DEFAULT': '1rem',
        'md': '0.75rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px'
      },
      maxWidth: {
        'container-max': '1280px'
      }
    }
  },
  plugins: []
}
