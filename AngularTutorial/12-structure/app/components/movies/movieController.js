(function () {
    'use strict';

    var app = angular.module('moviesApp');

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
}());