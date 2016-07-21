angular.module('foodie')
  .service('googleService', function($q, $http) {

    // this.getGoogleData = function(restaurant) {
    //   return $http({
    //     method: 'GET',
    //     url: 'https://google.com'
    //   }).then(function(response){
    //     return response.data;
    //   })
    // }
//     function initMap() {
//   var myLatLng = {lat: -25.363, lng: 131.044};
//
//   // Create a map object and specify the DOM element for display.
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: myLatLng,
//     scrollwheel: false,
//     zoom: 4
//   });
//
//   // Create a marker and set its position.
//   var marker = new google.maps.Marker({
//     map: map,
//     position: myLatLng,
//     title: 'Hello World!'
//   });
// }

  })
