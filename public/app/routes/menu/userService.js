angular.module('foodie').service('userService', function ($http) {

// something to post to users cart
// someting to get posted items
// something to delete items in the cart


//probs for restaurant
this.getUser = function () {
  return $http({
    method: 'GET',
    url: 'URL'
  })
  .then(function (response) {
    return response.data;
  })
}

// POST AKA SIGNUP
// this.getUser = function () {
//   return $http({
//     method: 'GET',
//     url: 'URL'
//   })
//   .then(function (response) {
//     return response.data;
//   })
// }

//changes user info
this.updateUser = function () {
  return $http({
    method: 'PUT',
    url: 'URL'
  })
  .then(function (response) {
    return response.data;
  })
}


this.deleteAccount = function () {
  return $http({
    method: 'DELETE',
    url: 'URL'
  })
  .then(function (response) {
    return response.data;
  })
}



//ending
})
