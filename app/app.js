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
                .when('/skills',{
                    templateUrl:'app/skills/skills.html'
                })
                .when('/work',{
                    templateUrl:'app/work/work.html'
                })
                .when('/resources',{
                    templateUrl:'app/resources/resources.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
