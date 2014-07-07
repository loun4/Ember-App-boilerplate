module.exports = {
	compile: {
		options: {
			templateBasePath: /public\/scripts\/templates\//
		},
		files: {
			'public/scripts/templates.js': 'public/scripts/templates/**/*.hbs'
		}
	}
}