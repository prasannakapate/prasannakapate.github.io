(function() {
    'use strict';

    angular
        .module('feApp')
        .controller('ResourcesCtrl', ResourcesCtrl);

    ResourcesCtrl.$inject = [];
    function ResourcesCtrl() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'Resources under construction';

        activate();

        function activate() {
        }
    }
})();