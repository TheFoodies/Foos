angular.module('foodie')
  .service('googleService', function($q, $http) {

    // this.getGoogleData = function(restaurant) {
    //   return $http({
    //     method: 'GET',
    //     url: 'https://maps.google.com/maps/api/js'
    //   }).then(function(response){
    //     return response.data;
    //   })
    // }


  })

  // <div class="map"map-lazy-load="https://maps.google.com/maps/api/js">
  //    <ng-map zoom="12" center="[{{userLocations[userLocations.length - 1].latitude}},{{userLocations[userLocations.length - 1].longitude}}]">
  //      <marker position="[{{userLocations[userLocations.length - 1].latitude}},{{userLocations[userLocations.length - 1].longitude}}]" title="employee" ></marker>
  //    </ng-map>
  // </div>
  //
  // <script src="https://maps.google.com/maps/api/js?key=AIzaSyCE-IsoxmgBiFRKXn0ZgZcYlLZ1FSvpJns"></script>
  //
  // ng-map
