'use strict';

var express = require('express');
var bookRouter = express.Router();
var router = function (nav) {
    var books = [
        {
            title: 'From a Buick 8',
            author: 'Stephen King',
            genre: 'Horror',
            read: false
        }, {
            title: 'Learning OpenShift',
            author: 'Grant Shipley',
            genre: 'Programming',
            read: true
        }, {
            title: 'OpenShift for Developers',
            author: 'Grant Shipley',
            genre: 'Programming',
            read: false
        }, {
            title: 'The Walking Dead',
            author: 'Robert Kirkham',
            genre: 'Horror',
            read: false
        }
    ];

    bookRouter.route('/').get(function (req, res) {
        res.render('bookList', {
            title: 'Books', nav: nav, books: books
        });
    });

    bookRouter.route('/:id').get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Books', nav: nav, book: books[id]
        });
    });
    return bookRouter;
};
module.exports = router;