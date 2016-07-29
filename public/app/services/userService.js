angular.module('foodie').service('userService', function ($http) {

  this.login = function(user) {
    return $http({
      method: 'POST',
      url: '/login/user',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/logout/user'
    }).then(function(response) {
      return response;
    });
  };


  this.getCurrentUser = function() {
  return $http({
    method: 'GET',
    url: '/me/user'
  }).then(function(response) {
    return response.data;
  });
};

this.registerUser = function(user) {
  return $http({
    method: 'POST',
    url: '/register/user',
    data: user
  }).then(function(response) {
    return response;
  });
};


//ending
})
