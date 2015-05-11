(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = ['$scope'];
    function Ctrl($scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'ContactCtrl';
    }
})();