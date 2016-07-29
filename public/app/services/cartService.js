angular.module("foodie").service("cartService", function($http, $q) {

  this.getCart = function(id) {
    $http({
      method: 'GET',
      url: '/api/cart/' + id
    }).then(function(cart) {
      return cart.data;
    })
  }

  this.addToCart = function(itemObj, restaurant, user) {
    $http({
      method: 'PUT',
      url: '/api/cart/' + restaurant + '/' + user,
      data: itemObj
    }).then(function(cart) {
      return cart.data
    })
  }

  this.updateCart = function(product, quantity, id) {
    $http({
      method: 'PUT',
      url: '/api/cart/' + id,
      data: {
        "product": product,
        "quantity": quantity
      }
    }).then(function(cart) {
      return cart.data
    })
  }

})
