angular.module('foodie')
  .controller('homeController', function($scope, userService, restaurantService, $state, ngDialog) {

// $scope.user = user;

    $scope.login = function(user) {
      userService.login(user).then(function(response) {
        if (!response.data) {
          alert('User does not exist');
          $scope.user.password = '';
        } else {
          $state.go('restaurants')
          ngDialog.close();
        }
      }).catch(function(err) {
        alert('Unable to login');
      });
    };

    $scope.register = function(user) {
      userService.registerUser(user).then(function(response) {
        if (!response.data) {
          alert('Unable to create user');
        } else {
          alert('User Created');
          $scope.newUser = {};
        }
      }).catch(function(err) {
        alert('Unable to create user');
      });
    };

    $scope.logout = function(user) {
      userService.logout().then(function(response) {
        setTimeout(function() {
          $state.go('menu');
          return response;
        }, 300)
      })
    }


    ///////////



    $scope.loginRest = function(restaurant) {
      restaurantService.loginRest(restaurant).then(function(response) {
        if (!response.data) {
          alert('User does not exist');
          $scope.restaurant.password = '';
        } else {
          $state.go('dashboard.menu', {id: response.data._id})
          ngDialog.close();
        }
      }).catch(function(err) {
        alert('Unable to login');
      });
    };

    $scope.registerRest = function(restaurant) {
      restaurantService.registerRestaurant(restaurant).then(function(response) {
        if (!response.data) {
          alert('Unable to create restaurant');
        } else {
          alert('Restaurant Created');
          $scope.newRestaurant = {};
        }
      }).catch(function(err) {
        alert('Unable to create restaurant');
      });
    };

    $scope.logoutRest = function(restaurant) {
      restaurantService.logoutRest().then(function(response) {
        setTimeout(function() {
          $state.go('menu');
          return response;
        }, 300)
      })
    }



    $scope.openLogin = function() {
        ngDialog.open({
            template: './app/routes/home/authModal.html',
        });
        $state.go('userlogin');
    };

  });
