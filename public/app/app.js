angular.module("foodie", ["ui.router", "ngDialog", "ngMap"])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/routes/home/home.html',
        controller: 'homeController',
        // resolve: {
        //   user: function(userService, $state) {
        //     return restaurantService.getRestaurantInfo().then(function(response) {
        //       if (!response.data)
        //         $state.go('login');
        //       return response.data;
        //     }).catch(function(err) {
        //       $state.go('login');
        //     });
        //   }
        // }
      })
      // .state('home.userSignup', {
      //   url: '/usersignup',
      //   templateUrl: './app/routes/home/userSignup.html',
      //   controller: 'homeController',
      // })
      // .state('home.userlogin', {
      //   url: '/userlogin',
      //   templateUrl: './app/routes/home/userlogin.html',
      //   controller: 'homeController',
      // })
      // .state('home.truckSignup', {
      //   url: '/trucksignup',
      //   templateUrl: './app/routes/home/truckSignup.html',
      //   controller: 'homeController',
      // })
      // .state('home.trucklogin', {
      //   url: '/trucklogin',
      //   templateUrl: './app/routes/home/truckLogin.html',
      //   controller: 'homeController',
      // })



      // log in / sign up states //
      .state('usersignup', {
        url: '/user/signup',
        templateUrl: './app/routes/home/userSignup.html',
        controller: 'homeController'
      })
      .state('userlogin', {
        url: '/user/login',
        templateUrl: './app/routes/home/userLogin.html',
        controller: 'homeController'
      })
      .state('trucksignup', {
        url: '/truck/signup',
        templateUrl: './app/routes/home/truckSignup.html',
        controller: 'homeController'
      })
      .state('trucklogin', {
        url: '/truck/login',
        templateUrl: './app/routes/home/truckLogin.html',
        controller: 'homeController'
      })
      // log in / sign up states End //

      .state('restaurants', {
        url: '/restaurants',
        templateUrl: './app/routes/restaurant/restaurant.html',
        controller: 'restaurantController'
      })
      .state('menu', {
        url: '/restaurant/:restaurantID',
        templateUrl: './app/routes/menu/menu.html',
        controller: 'menuController',
        resolve: {
          user: function(userService, $state) {
            return userService.getCurrentUser().then(function(response) {
              console.log(response, 'cupcake');
              if (!response) {
                // $state.go('login');
              }

              return response;
            }).catch(function(err) {
              // $state.go('login');
            });
          }
        }
      })
      .state('menu.information', {
        url: '/info',
        templateUrl: './app/routes/menu/menu-information.html',
        controller: 'menuController'
      })
      .state('menu.photos', {
        url: '/photos',
        templateUrl: './app/routes/menu/menu-photos.html',
        controller: 'menuController'
      })
      .state('menu.map', {
        url: '/map',
        templateUrl: './app/routes/menu/menu-map.html',
        controller: 'menuController'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: './app/routes/cart/cart.html',
        controller: 'cartController',
        resolve: {
          user: function(userService, $state) {
            return userService.getCurrentUser().then(function(response) {
              if (!response.data)
                $state.go('login');
              return response.data;
            }).catch(function(err) {
              $state.go('login');
            });
          }
        }
      })
      .state('cartSuccess', {
        url: '/success',
        templateUrl: './app/routes/success/success.html',
        controller: 'cartController'
      })
      .state('order', {
        url: '/order',
        templateUrl: './app/routes/order/order.html',
        controller: 'orderController'
      })
      .state('dashboard', {
        url: '/dashboard/:id',
        templateUrl: './app/routes/dashboard/dashboard.html',
      })
      .state('dashboard.map', {
        url: '/map/:id',
        templateUrl: './app/routes/dashboard/map.html',
        controller: 'mapController'
      })
      .state('dashboard.menu', {
        url: '/menu/:id',
        templateUrl: './app/routes/dashboard/menu.html',
        controller: 'dashboardMenuController'
      })
      .state('faq', {
        url: '/faq',
        templateUrl: './app/routes/faq/faq.html'
      })

    $urlRouterProvider.otherwise('/');

  })
