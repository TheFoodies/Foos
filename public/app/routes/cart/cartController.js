angular.module("foodie").controller("cartController", function($scope, cartService) {

  $scope.cart = [];

  $scope.getCart = function() {
    cartService.getCart($scope.user._id).then(function(cart) {
      $scope.cart = cart;
    })
  }

  $scope.getCart();

  $scope.updateCart = function(products, quantity) {
    cartService.updateCart(products, quantity, $scope.user._id).then(function(cart) {
      $scope.cart = cart;
    })
  }

})
