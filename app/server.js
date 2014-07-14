var express = require('express'),
    app = express();

require('../app/route')(app);

app.set("views", __dirname + "/views");

app.set("view engine", "jade");

var port = process.env.PORT || 3000;
app.listen(port);

app.use(express.static(__dirname + '/assets'));

app.use(require('connect-assets')({
    paths: ['app/assets/js'],
    compress: { prod: true }
}));

module.exports = app;
