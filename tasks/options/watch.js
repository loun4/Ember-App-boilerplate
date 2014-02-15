module.exports = {
    options: {
        livereload:true
    }, 
    sourcehtml: {
        files:['public/index.html']
    },
    emberTemplates: {
        files:['public/scripts/templates/**/*.hbs'],
        tasks: ['emberTemplates']
    },
    sourcejs: {
        files: '<%= jshint.ignore_warning.src %>',
        spawn: true,
        tasks: ['jshint', 'concat:app']
    },
    compass: {
        files: 'public/sass/**/*',
        spawn: true,
        tasks: ['compass']
    }, 
    sourcecss: {
        files: ['public/styles/*.css']
    },
    server: {
        files:  [ './server/**/*', 'server.js' ],
        tasks:  [ 'reloadserver', 'connect:livereload']
    }
}