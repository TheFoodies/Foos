angular.module("foodie").controller("orderController", function($scope, $http) {

  $scope.orderFeed = function(){
    service.getOrder().then(function (response){
      $scope.orderFeed = response;
    })
  }

})
