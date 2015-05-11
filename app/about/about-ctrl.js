(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['$scope'];
    function AboutCtrl($scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'Ctrl';

        console.log("AboutCtrl");
    }
})();