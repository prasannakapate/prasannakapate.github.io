(function() {
    'use strict';

    angular
        .module('feApp')
        .controller('WorkCtrl', WorkCtrl);

    WorkCtrl.$inject = [];
    function WorkCtrl() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'under construction';

        activate();

        function activate() {
        }
    }
})();