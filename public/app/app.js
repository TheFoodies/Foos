angular.module("foodie", ["ui.router", "ngDialog", "ngMap", "angularModalService"])
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
