(function () {
    'use strict';

    var app = angular.module('moviesApp', []);

    app.controller('MoviesCtrl', ['$http',
        function ($http) {
            var vm = this;
            vm.movies = [];

            $http.get('movies.json').then(function (response) {
                vm.movies = response.data;
            });
    }]);

    app.filter('rating', function () {
        return function (rating) {
            var output = '';

            for (var i = 0; i < rating; i++) output += '\u2605';
            for (var j = rating; j < 5; j++) output += '\u2606';

            return output;
        };
    });
}());