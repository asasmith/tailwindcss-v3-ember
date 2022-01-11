module.exports = {
  content: ['./app/**/*.hbs'],
  theme: {
    extend: {
      container: (theme) => ({
        center: true,
        padding: theme('spacing.5'),
      }),
    },
  },
  plugins: [],
};
