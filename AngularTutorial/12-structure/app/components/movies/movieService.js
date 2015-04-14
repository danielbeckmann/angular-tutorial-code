(function () {
    'use strict';

    var app = angular.module('moviesApp');

    app.factory('movieService', ['$http',
        function ($http) {
            var serviceUrl = 'app/components/movies/movies.json';

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
}());