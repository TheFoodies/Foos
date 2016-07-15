angular.module("foodie").controller("menuController", function($scope, yelpService) {

  $scope.getYelpData = function() {
    yelpService.getYelpData($scope.restaurant).then(function(data) {
      $scope.yelpData = data;
    })
  }

})
