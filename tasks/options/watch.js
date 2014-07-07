module.exports = {
    options: {
        livereload:true
    }, 
    sourcehtml: {
        files:['public/index.html']
    },
    emberTemplates: {
        files: ['public/scripts/templates/**/*.hbs'],
        tasks: ['emberTemplates']
    },
    sourcejs: {
        files: ['assets/js/**/*.js'],
        spawn: true,
        tasks: ['jshint']
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
        tasks:  [ 'connect:livereload']
    }
}