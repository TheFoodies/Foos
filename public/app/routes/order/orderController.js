angular.module("foodie").controller("orderController", function($scope, $http, orderService) {

  // $scope.orderFeed = function(){
  //   service.getOrder().then(function (response){
  //     $scope.orderFeed = response;
  //     console.log(response);
  //   })
  //   console.log(response);

    $scope.getOrders = function(){
      orderService.getOrders().then(function(orders){

        console.log("here are the orders", orders.items)
        console.log("here are the orders", orders)
        $scope.orders = orders.data;

      })
    }

    $scope.getOrders();

    $scope.completeOrder = function(id) {
      orderService.completeOrder(id).then(function(orders) {
        $scope.getOrders();
      })
    }

    $scope.finishedOrder = function(id) {
      orderService.finishedOrder(id).then(function(orders) {
        $scope.getOrders();
      })
    }

})
