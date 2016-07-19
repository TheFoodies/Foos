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
        templateUrl: './app/routes/restaurants/restaurants.html',
        controller: 'restaurantController'
      })
      .state('menu', {
        url: '/restaurant/:restaurantID',
        templateUrl: './app/routes/menu/menu.html',
        controller: 'menuController'
      })
      .state('order', {
        // url: '/restaurant/:restaurantID',
        url: '/order',
        templateUrl: './app/routes/order/order.html',
        // controller: 'orderController'
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
  })
