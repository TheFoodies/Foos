angular.module('foodie').directive('navbar', function () {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/navbar/navbar.html',
    controller: 'homeController'
  }
})
