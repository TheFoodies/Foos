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

  this.getAllRestaurantInfo = function(id) {
    return $http({
      method: 'GET',
      url: '/api/restaurant/' + id
    }).then(function (response){
      console.log(response);
      return response.data;
    })
  }

  this.updateRestaurantInfo = function(restaurantObj) {
    return $http({
      method: 'PUT',
      url: '/api/restaurant',
      data: restaurantObj
    }).then(function (response){
      console.log(response.menu);
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

this.AddToMenu = function(category, menuObj){
  console.log(menuObj)
  return $http({
    method: "PUT",
    url: '/api/restaurant/' + category,
    data: menuObj
  }).then(function(response){
    return response;
  });
};

this.addCategory = function(category) {
  console.log(category)
  return $http({
    method: "PUT",
    url: '/api/restaurant/category',
    data: {name: category, items: []}
  }).then(function(response){
    return response;
  });
};



});
