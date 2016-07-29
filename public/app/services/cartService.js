angular.module("foodie").service("cartService", function($http, $q) {

  this.getCart = function(restaurant, user) {
    return $http({
      method: 'GET',
      url: '/api/cart/' +  restaurant + '/' + user
    }).then(function(cart) {
      return cart.data;
    })
  }

  this.addToCart = function(itemObj, restaurant, user) {
    console.log(itemObj)
    return $http({
      method: 'PUT',
      url: '/api/cart/' + restaurant + '/' + user,
      data: itemObj
    }).then(function(cart) {
      return cart.data
    })
  }

  this.updateCart = function(product, quantity, id) {
    return $http({
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
