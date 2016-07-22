angular.module("foodie").service("restaurantService", function($http) {

  this.loginRest = function(restaurant) {
    return $http({
      method: 'POST',
      url: '/login/restaurant',
      data: restaurant
    }).then(function(response) {
      return response;
    });
  };

  this.logoutRest = function() {
    return $http({
      method: 'GET',
      url: '/logout/restaurant'
    }).then(function(response) {
      return response;
    });
  };


  this.getCurrentRestaurant = function() {
  return $http({
    method: 'GET',
    url: '/me/restaurant'
  }).then(function(response) {
    return response;
  });
};

this.registerRestaurant = function(user) {
  return $http({
    method: 'POST',
    url: '/register/restaurant',
    data: user
  }).then(function(response) {
    return response;
  });
};



});
