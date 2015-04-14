(function () {
    'use strict';

    var app = angular.module('moviesApp');

    // Setup routes
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'app/components/movies/list.html',
                    controller: 'MoviesCtrl',
                    controllerAs: 'vm'
                }).
                when('/about', {
                    templateUrl: 'app/components/infos/infos.html'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }
    ]);
}());