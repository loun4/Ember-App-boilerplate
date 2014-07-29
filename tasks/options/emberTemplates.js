module.exports = {
	compile: {
		options: {
			templateBasePath: /app\/assets\/js\/templates\//
		},
		files: {
			'app/assets/js/templates.js': 'app/assets/js/templates/**/*.hbs'
		}
	}
}