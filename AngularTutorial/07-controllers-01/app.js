(function () {
    'use strict';

    var app = angular.module('moviesApp', []);

    app.controller('MovieCtrl', function () {
        this.movies = ['Furious 7', 'Big Hero 6', 'Lucy', 'Avatar', 'The Dark Knight', 'Iron Man'];
      });
}());