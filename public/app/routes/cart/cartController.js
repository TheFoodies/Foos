angular.module("foodie").controller("cartController", function($scope, cartService) {

  $scope.cart = {};

  $scope.getCart = function() {
    cartService.getCart().then(function(cart) {
      $scope.cart = cart;
    })
  }

  // $scope.getCart();

})
