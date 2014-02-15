module.exports = {
    app: {
        src :[
            'public/scripts/banners/header.js',
        	'public/scripts/router.js',
            'public/scripts/model/**/*.js',
            'public/scripts/routes/**/*.js',
            'public/scripts/controllers/**/*.js',
            'public/scripts/views/**/*.js',
            'public/scripts//banners/footer.js',
            'public/scripts/components/**/*.js'],
        dest : 'public/dist/scripts/app.js'
    },

    lib: {
        src :[
            'public/bower_components/ember/ember.js',
            'public/bower_components/jquery/jquery.js',
            'public/bower_components/handlebars/handlebars.js'],
        dest : 'public/dist/scripts/lib.js'
    }
}