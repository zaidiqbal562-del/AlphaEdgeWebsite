/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom CSS variables that will be used via var()
        'page-bg': 'var(--page-bg)',
        'surface': 'var(--surface)',
        'surface-strong': 'var(--surface-strong)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border-soft': 'var(--border-soft)',
        'accent': 'var(--accent)',
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'default': '0 18px 50px rgba(2, 6, 23, 0.18)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
