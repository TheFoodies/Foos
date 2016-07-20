angular.module('foodie').controller('dashboardCtrl', function ($scope, dashboardService) {


$scope.restaurantInfo = function () {
  dashboardService.getRestaurantInfo()
  .then(function (response) {
    return response;
  })
}


$scope.updateRestaurantInfo = function (restaurant) {
  dashboardService.updateRestaurantInfoCall(restaurant)
  .then(function (response) {
    $scope.restaurantInfo();
    return response;
  })
}


//ending
})
