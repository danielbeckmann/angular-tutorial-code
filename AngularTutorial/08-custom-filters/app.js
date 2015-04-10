﻿(function () {
    'use strict';

    var app = angular.module('moviesApp', []);

    app.controller('MoviesCtrl', function () {
        this.movies = [
            { title: 'Furious 7', year: 2015, rating: 4, poster: 'http://image.tmdb.org/t/p/original/dCgm7efXDmiABSdWDHBDBx2jwmn.jpg' },
            { title: 'Big Hero 6', year: 2014, rating: 2, poster: 'http://image.tmdb.org/t/p/original/3zQvuSAUdC3mrx9vnSEpkFX0968.jpg' },
            { title: 'Lucy', year: 2014, rating: 3, poster: 'http://image.tmdb.org/t/p/original/rwn876MeqienhOVSSjtUPnwxn0Z.jpg' },
            { title: 'Avatar', year: 2009, rating: 4, poster: 'http://image.tmdb.org/t/p/original/tcqb9NHdw9SWs2a88KCDD4V8sVR.jpg' },
            { title: 'The Dark Knight', year: 2008, rating: 4, poster: 'http://image.tmdb.org/t/p/original/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg' },
            { title: 'Iron Man', year: 2008, rating: 4, poster: 'http://image.tmdb.org/t/p/original/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg' }
        ];
    });

    app.filter('rating', function () {
        return function (rating) {
            var output = '';

            for (var i = 0; i < rating; i++) output += '\u2605';
            for (var j = rating; j < 5; j++) output += '\u2606';

            return output;
        };
    });
}());