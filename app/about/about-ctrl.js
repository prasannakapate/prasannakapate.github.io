(function() {
    'use strict';

    angular
        .module('feApp')
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['$scope'];
    function AboutCtrl($scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'About under construction';

        activate();

        function activate() {
        }
    }
})();