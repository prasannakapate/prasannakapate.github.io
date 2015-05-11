(function() {
    'use strict';
    angular
        .module("myApp", ['ngRoute','ngAnimate'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/skills', {
                    templateUrl: 'app/skills/skills.html'
                })
                .when('/about',{
                    templateUrl:'app/about/about.html'
                })
                .when('/profile',{
                    templateUrl:'app/profile/profile.html'
                })
                .when('/contact',{
                    templateUrl:'app/contact/contact.html'
                })
                .otherwise({
                    redirectTo: '/profile'
                })
        });
})();
