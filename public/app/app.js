angular.module("foodie", ["ui.router", "ngDialog"])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/routes/home/home.html',
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
      .state('faq', {
        url: '/faq',
        templateUrl: './app/routes/faq/faq.html'

      })

      $urlRouterProvider.otherwise('/');
  })
