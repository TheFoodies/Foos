angular.module("foodie", ["ui.router", "ngDialog", "ngMap"])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/routes/home/home.html',
        controller: 'homeController',
        // resolve: {
        //   user: function(authService, $state) {
        //     return authService.getCurrentUser().then(function(response) {
        //       if (!response.data)
        //         $state.go('login');
        //       return response.data;
        //     }).catch(function(err) {
        //       $state.go('login');
        //     });
        //   }
        // }
      })

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
      .state('restaurants', {
        url: '/restaurants',
        templateUrl: './app/routes/restaurant/restaurant.html',
        controller: 'restaurantController'
      })
      .state('menu', {
        url: '/restaurant/:restaurantID',
        templateUrl: './app/routes/menu/menu.html',
        controller: 'menuController'
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
        controller: 'cartController'
      })
      .state('cartSuccess', {
        url: '/success',
        templateUrl: './app/routes/success/success.html',
        controller: 'cartController'
      })
      .state('order', {
        // url: '/restaurant/:restaurantID',
        url: '/order',
        templateUrl: './app/routes/order/order.html',
        controller: 'orderController'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: './app/routes/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .state('dashboard.map', {
        url: '/map',
        templateUrl: './app/routes/dashboard/map.html',
        controller: 'dashboardCtrl'
      })
      .state('dashboard.menu', {
        url: '/menu',
        templateUrl: './app/routes/dashboard/menu.html',
        controller: 'dashboardCtrl'
      })
      .state('faq', {
        url: '/faq',
        templateUrl: './app/routes/faq/faq.html'
      })

$urlRouterProvider.otherwise('/');

})
