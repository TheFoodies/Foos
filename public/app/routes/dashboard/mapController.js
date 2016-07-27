angular.module("foodie").controller("mapController", function($scope) {

  navigator.geolocation.getCurrentPosition(function(position){console.log(position)});

  $scope.getUserLocation = function() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              function(pos) {
                $scope.lat = (pos.coords.longitude).toFixed(2);
                $scope.lon = (pos.coords.latitude).toFixed(2);
                $scope.location = '{' + $scope.lat + ', ' + $scope.lon + '}';
                console.log($scope.location);
              },
              function(error) {
                $scope.lat = $scope.user.location[1];
                $scope.lon = $scope.user.location[0];
              }, {
                timeout: (5 * 1000),
                maximumAge: (1000 * 60 * 15),
                enableHighAccuracy: true
              }
            );
          }
        };
        $scope.getUserLocation();

})
