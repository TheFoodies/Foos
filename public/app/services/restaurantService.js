angular.module("foodie").service("restaurantService", function($http) {

  this.getRestaurantInfo = function() {
    return $http({
      method: 'GET',
      url: '/api/restaurant'
    }).then(function (response){
      console.log(response);
      return response.data;
    })
  }

});
