'use strict';

function config(name) {
  return require('./tasks/options/' + name);
}

var configs = {
    jshint: config('jshint'),
    compass: config('compass'),
    watch: config('watch'),
    emberTemplates: config('emberTemplates'),      
    connect: config('connect'),
    open: config('open')
}

function exports(grunt) {  
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);   

    configs.pkg = grunt.file.readJSON('package.json');
    grunt.initConfig(configs);

    grunt.task.loadTasks('./tasks');
    grunt.registerTask('build', ['compass:dist']);
}

module.exports = exports;