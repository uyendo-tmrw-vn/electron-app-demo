/* postcss.config.js */
const path = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: './renderer/tailwind.config.js',
    },
    autoprefixer: {},
  },
};