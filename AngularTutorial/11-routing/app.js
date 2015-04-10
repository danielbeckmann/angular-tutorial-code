(function () {
    'use strict';

    var app = angular.module('moviesApp', []);

    app.controller('MoviesCtrl', ['movieService',
        function (service) {
            var vm = this;
            vm.movies = [];

            service.getPopular().then(function (response) {
                vm.movies = response.data;
            });
    }]);

    app.factory('movieService', ['$http',
        function ($http) {
            var serviceUrl = 'movies.json';

            var getPopular = function () {
                return $http.get(serviceUrl);
            };

            return {
                getPopular: getPopular
            };
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