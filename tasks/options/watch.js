module.exports = {
    options: {
        livereload: true
    }, 

    sourcehtml: {
        files:['views/index.jade']
    },

    emberTemplates: {
        files: ['app/assets/js/templates/**/*.hbs'],
        tasks: ['emberTemplates']
    },

    sourcejs: {
        files: ['app/assets/js/**/*.js'],
        spawn: true,
        tasks: ['jshint']
    },

    compass: {
        files: 'app/assets/sass/**/*',
        spawn: true,
        tasks: ['compass']
    }, 

    sourcecss: {
        files: ['public/styles/*.css']
    }
}