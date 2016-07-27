angular.module('foodie')
  .controller('restaurantController', function($scope, restaurantService){
    $scope.getRestaurantInfo = function () {
      restaurantService.getAllRestaurantInfo()
      .then(function (response){
        $scope.restaurants = response;
      })
    }
    $scope.getRestaurantInfo();
  });
