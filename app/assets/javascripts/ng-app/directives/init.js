angular.module('NodeZen')
  .directive('init', function () {
    return {
      controller: 'init',
      restrict: 'E',
      templateUrl: 'views/init.tpl.html'
    };
  });