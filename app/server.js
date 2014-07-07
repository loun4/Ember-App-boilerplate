var express = require('express'),
    app = express();

require('../app/route')(app);

app.set("views", __dirname + "/views");

app.set("view engine", "jade");

app.use(express.static(__dirname + '/assets'));

app.use(require('connect-assets')({
    paths: ['app/assets/js'],
    compress: { prod: true }
}));

module.exports = app;
