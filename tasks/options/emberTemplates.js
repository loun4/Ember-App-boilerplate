module.exports = {
	compile: {
		options: {
			templateBasePath: /public\/scripts\/templates\//
		},
		files: {
			'public/dist/scripts/templates.js': 'public/scripts/templates/**/*.hbs'
		}
	}
}