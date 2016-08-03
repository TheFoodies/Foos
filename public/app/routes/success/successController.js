angular.module("foodie").controller("successController", function($scope, $stateParams, user, orderService) {

  $scope.getOneOrder = function() {
    orderService.getOneOrder($stateParams.orderID).then(function(order) {
      $scope.order = order.items;
      $scope.baseOrder = order;
      console.log("success order is ", order)
    })
  }

  $scope.getOneOrder();

  $scope.user = user;

})
