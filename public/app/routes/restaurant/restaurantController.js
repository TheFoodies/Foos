angular.module('foodie')
  .controller('restaurantController', function($scope, restaurantService){
    $scope.getRestaurantInfo = function () {
      restaurantService.getRestaurantInfo()
      .then(function (response){
        $scope.restaurants = response;
      })
    }
    $window.navigator.geolocation.getCurrentPosition(pos);


  });
