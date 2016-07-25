angular.module('foodie').controller('dashboardCtrl', function ($scope, $stateParams, restaurantService, foodService) {


$scope.restaurantInfo = function() {
  restaurantService.getRestaurantInfo($stateParams.id)
  .then(function (response) {
    return response;
  })
}
$scope.restaurantInfo();

$scope.updateRestaurantInfo = function (name, phone, location) {
  restaurantService.updateRestaurantInfoCall(name, phone, location)
  .then(function (response) {
    $scope.restaurantInfo();
    return response;
  })
}

$scope.addFood = function(name, price, description, allergyInfo, sizes){
  foodService.createFood(name, price, description, allergyInfo, sizes, $stateParams.id){
    .then(function(response){
      $scope.getRestaurantInfo();
      return response;
    })
  }
}
$scope.updateFood = function(name, price, description, allergyInfo, sizes){
  foodService.updateFood(name, price, description, allergyInfo, sizes, $stateParams.id){
    .then(function(response){
      $scope.getRestaurantInfo();
      return response;
    })
  }
}

$scope.deleteFood = function (id){
  foodService.deleteFood(id){
    .then(function(response){
      $scope.getRestaurantInfo();
      return response;
    })
  }
}



navigator.geolocation.getCurrentPosition(function(position){console.log(position)});

$scope.getUserLocation = function() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function(pos) {
              $scope.lat = (pos.coords.longitude).toFixed(2);
              $scope.lon = (pos.coords.latitude).toFixed(2);
              $scope.location = '{' + $scope.lat + ', ' + $scope.lon + '}';
              console.log($scope.location);
            },
            function(error) {
              $scope.lat = $scope.user.location[1];
              $scope.lon = $scope.user.location[0];
            }, {
              timeout: (5 * 1000),
              maximumAge: (1000 * 60 * 15),
              enableHighAccuracy: true
            }
          );
        }
      };
      $scope.getUserLocation();

//ending
})
