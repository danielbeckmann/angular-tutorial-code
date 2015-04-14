(function () {
    'use strict';

    var app = angular.module('moviesApp');

    app.filter('rating', function () {
        return function (rating) {
            var output = '';

            for (var i = 0; i < rating; i++) output += '\u2605';
            for (var j = rating; j < 5; j++) output += '\u2606';

            return output;
        };
    });
}());