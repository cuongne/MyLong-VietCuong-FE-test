export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          borderRadius: {
              lg: 'var(--radius)',
              md: 'calc(var(--radius) - 2px)',
              sm: 'calc(var(--radius) - 4px)',
          },
          animation: {
            "fade-green": "fadeGreen 500ms ease",
          },
          keyframes: {
            fadeGreen: {
              "0%": { backgroundColor: "rgba(16, 185, 129)" }, // Green
              "100%": { backgroundColor: "rgba(148, 163, 184)" }, // Gray
            },
          },
          colors: {},
          fontFamily: {
              inter: ['Inter', 'sans-serif'], // Đặt font Inter
          },
      },
  },
  plugins: [],
}
