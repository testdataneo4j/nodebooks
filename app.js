'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 5000;
var nav =  [{Link: '/Books', Text: 'Books'},
    {Link: '/Authors', Text: 'Authors'}];

var bookRouter = require('./src/routes/bookRouter')(nav);

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'jade');

app.use('/Books', bookRouter);
app.get('/', function (req, res) {
    res.render('index', {title: 'Hello Books', nav: nav});
});

app.listen(port, function (err) {
    console.log('running server on port :' + port);
});