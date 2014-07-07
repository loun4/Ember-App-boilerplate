
module.exports = {
    dist: {
        options: {
            sourceMap: 'dist/scripts/source-map.js'
        },

        files: {
            'dist/scripts/app.min.js': ['dist/scripts/lib.js', 'dist/scripts/app.js']
        }
    }
}
