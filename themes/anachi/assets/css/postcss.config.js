const themeDir = __dirname + '/../../';

module.exports = {
  plugins: {
		tailwindcss: { config: themeDir + 'assets/css/tailwind.config.js' },
    autoprefixer: {},
  }
}
