var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var path = require('path');
var mountFolder = function (connect, dir) {
    return connect.static(path.resolve(dir));
};

var config = {
    app: './public',
    dist: 'dist'
}; 

module.exports = {
	options: {
		port: 8000,
		hostname: 'localhost'
	},
	livereload: {
		options: {
			middleware: function (connect) {
				return [
					lrSnippet,
					mountFolder(connect, '.tmp'),
					mountFolder(connect, config.app),
					require('../../server/server.js')
				];
			}
		}
	}
}