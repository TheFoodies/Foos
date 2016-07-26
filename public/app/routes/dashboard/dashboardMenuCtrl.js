angular.module('foodie').controller('dashboardMenuController', function ($scope, $stateParams, ngDialog, restaurantService, foodService) {


$scope.restaurantInfo = function() {
  console.log('get restaurantInfo');

  restaurantService.getRestaurantInfo($stateParams.id)
  .then(function (response) {
    console.log(response.menu);
    $scope.menu = response.menu;
    $scope.restaurantObj = response;
  })
}
$scope.restaurantInfo();

$scope.updateRestaurantInfo = function (restaurantObj) {
  restaurantService.updateRestaurantInfo(restaurantObj)
  .then(function (response) {
    $scope.restaurantInfo();
    return response;
  })
}

$scope.addFood = function(newItemObj){
  console.log(newItemObj);
  newItemObj.restaurant = $stateParams.id;
  foodService.createFood(newItemObj)
    .then(function(response){
      $scope.restaurantInfo();
      console.log(response);
      $scope.AddToMenu(response);
    })

}
$scope.updateFood = function(name, price, description, allergyInfo, sizes){
  foodService.updateFood(name, price, description, allergyInfo, sizes, $stateParams.id)
    .then(function(response){
      $scope.getRestaurantInfo();
      return response;
    })

}

$scope.deleteFood = function (id){
  foodService.deleteFood(id)
    .then(function(response){
      $scope.getRestaurantInfo();
      return response;
    })

}

$scope.AddToMenu = function (MenuObj) {
  var category = $scope.category;
  console.log($scope.category)
  restaurantService.AddToMenu($scope.category, MenuObj)
  .then(function (response) {
    return response;
  })
}

      $scope.clickToOpen = function(item) {
          var newScope = $scope.$new();
          newScope.item = item;
          ngDialog.open({
              template: './app/routes/dashboard/menu-modal.html',
              scope: newScope
          });
      };

      $scope.AddItem = function(category) {
        var newScope = $scope.$new();
        newScope.category = category;
        console.log(category);
          ngDialog.open({
              template: './app/routes/dashboard/newItem.html',
              controller: 'dashboardMenuController',
              scope: newScope
          });
      };


//ending
})
