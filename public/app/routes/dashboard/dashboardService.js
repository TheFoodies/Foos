angular.module('foodie').service('dashboardService', function ($http) {


//gets restaurant info
//also won't need id because of local auth
this.getRestaurantInfo = function () {
  return $http({
    method: 'GET',
    url: '/api/restaurant'
  })
  .then(function (response) {
    console.log(response);
    return response.data;
  })
}


//updates restaurant info
this.updateRestaurantInfoCall = function (restaurantObj) {
  return $http({
    method: 'PUT',
    url: '/api/restaurant',
    data: restaurantObj
  })
  .then(function (response) {
    console.log(response);
    return response.data;
  })
}





//ending
})
