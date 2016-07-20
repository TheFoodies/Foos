angular.module("foodie").controller("menuController", function($scope, yelpService, restaurantService) {

  // $scope.getYelpData = function() {
  //   yelpService.getYelpData($scope.restaurant).then(function(data) {
  //     $scope.yelpData = data;
  //   })
  // }
  //
  // $scope.getYelpData();

  $scope.restaurant = {};

  $scope.getRestaurant = function() {
    restaurantService.getRestaurant($state.id).then(function(restaurant) {
      $scope.restaurant = restaurant;
    })
  }

  // $scope.getRestaurant();

})
