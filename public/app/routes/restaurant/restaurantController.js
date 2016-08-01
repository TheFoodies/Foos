angular.module('foodie')
  .controller('restaurantController', function($scope, restaurantService){
    $scope.getRestaurantInfo = function () {
      restaurantService.getAllRestaurantInfo()
      .then(function (response){
        $scope.restaurants = response;
        console.log(response)
      })
    }
    $scope.getRestaurantInfo();


        $scope.findAveragePrice = function() {
            var sum = 0;
            var items = 0;
            var average = 0;
            for (var i = 0; i < $scope.restaurants.menu.length; i++) {

                for (var j = 0; j < menu[i].items.length; j++) {
                    sum += menu[i].items[j].price;
                    items += 1;
                }

            }
            average = sum / items;
            if (average > 0 && average <= 10) {
                $scope.averagePrice = "$";
            } else if (average > 10 && average <= 20) {
                $scope.averagePrice = "$$";
            } else if (average > 20 && average <= 30) {
                $scope.averagePrice = "$$$";
            } else {
                $scope.averagePrice = "$$$$";
            }
        }

  });
