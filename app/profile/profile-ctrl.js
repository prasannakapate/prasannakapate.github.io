(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['$scope'];

    function ProfileCtrl($scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'ProfileCtrl';

        console.log('ProfileCtrl');
    }
})();
