module.exports = function(grunt) {
    grunt.registerTask('init', function (target) {
        grunt.task.run(['shell', 'concat:app', 'concat:lib']);
    });
};
