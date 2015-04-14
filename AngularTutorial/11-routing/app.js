(function () {
    'use strict';

    var app = angular.module('moviesApp', ['ngRoute']);

    // Setup routes
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'list.html',
                    controller: 'MoviesCtrl',
                    controllerAs: 'vm'
                }).
                when('/about', {
                    templateUrl: 'infos.html'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }
    ]);

    app.controller('MoviesCtrl', ['movieService',
        function (movieService) {
            var vm = this;
            vm.movies = [];

            movieService.getPopular().then(function (response) {
                vm.movies = response.data;

                // Get favorites
                var favorites = movieService.getFavorites();
                angular.forEach(vm.movies, function (item) {
                    item.isFavorite = favorites.indexOf(item.id) > -1;
                });
            });

            // Adds or removes a movie from the favorites
            this.toggleFavorite = function (item) {

                // Remove from collection
                var favorites = movieService.getFavorites();
                if (item.isFavorite) {
                    var index = favorites.indexOf(item.id);
                    favorites.splice(index, 1);
                }
                else {
                    favorites.push(item.id);
                }

                movieService.setFavorites(favorites);

                // Toggle attribute
                item.isFavorite = !item.isFavorite;
            };
    }]);

    app.factory('movieService', ['$http',
        function ($http) {
            var serviceUrl = 'movies.json';

            var getPopular = function () {
                return $http.get(serviceUrl);
            };

            var getFavorites = function () {
                return JSON.parse(localStorage.getItem('favorites')) || [];
            };

            var setFavorites = function (favorites) {
                localStorage.setItem('favorites', JSON.stringify(favorites));
            };

            return {
                getPopular: getPopular,
                getFavorites: getFavorites,
                setFavorites: setFavorites
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