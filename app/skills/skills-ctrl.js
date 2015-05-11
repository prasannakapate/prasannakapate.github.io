(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('SkillsCtrl', SkillsCtrl);

    SkillsCtrl.$inject = ['$scope'];
    function SkillsCtrl(dependencies) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'SkillsCtrl';
        console.log('SkillsCtrl');
    }
})();