module.exports = function(grunt) {
	grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.log.writeln('Started web server on port 3000');
        require('../app/server').listen(3000);

        grunt.task.run([
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
};