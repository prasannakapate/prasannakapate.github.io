(function() {
    'use strict';

    angular
        .module('feApp', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/home/home.html',
                })
                .when('/about',{
                	templateUrl:'app/about/about.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
