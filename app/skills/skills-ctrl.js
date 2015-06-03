(function() {
	'use strict';

	angular
		.module('feApp')
		.controller('SkillsCtrl',SkillsCtrl);

	SkillsCtrl.$inject = ['$scope'];

	function SkillsCtrl($scope){
		var vm = this;
		vm.title = "Skills under construction";
	}

})();
