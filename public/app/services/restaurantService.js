angular.module("foodie").service("restaurantService", function($http) {

  this.getRestaurantInfo = function(id) {
    return $http({
      method: 'GET',
      url: '/api/restaurant/' + id
    }).then(function (response){
      console.log(response);
      return response.data;
    })
  }
  this.updateRestaurantInfo = function(name, phone, location) {
    return $http({
      method: 'GET',
      url: '/api/restaurant',
      data: {"name": name, "phone": phone, "location": location}
    }).then(function (response){
      console.log(response);
      return response.data;
    })
  }
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
