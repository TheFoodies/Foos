angular.module("foodie", ["ui.router", "ngDialog"]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './app/routes/home/home.html',
    controller: 'homeController'
  }).state('restaurants', {
    url: '/restaurants',
    templateUrl: './app/routes/restaurant/restaurant.html',
    controller: 'restaurantController'
  }).state('menu', {
    url: '/restaurant/:restaurantID',
    templateUrl: './app/routes/menu/menu.html',
    controller: 'menuController'
  }).state('menu.information', {
    url: '/info',
    templateUrl: './app/routes/menu/menu-information.html',
    controller: 'menuController'
  }).state('menu.photos', {
    url: '/photos',
    templateUrl: './app/routes/menu/menu-photos.html',
    controller: 'menuController'
  }).state('menu.map', {
    url: '/map',
    templateUrl: './app/routes/menu/menu-map.html',
    controller: 'menuController'
  }).state('cart', {
    url: '/cart',
    templateUrl: './app/routes/cart/cart.html',
    controller: 'cartController'
  }).state('order', {
    // url: '/restaurant/:restaurantID',
    url: '/order',
    templateUrl: './app/routes/order/order.html',
    controller: 'orderController'
  }).state('dashboard', {
    url: '/dashboard',
    templateUrl: './app/routes/dashboard/dashboard.html',
    controller: 'dashboardCtrl'
  }).state('faq', {
    url: '/faq',
    templateUrl: './app/routes/faq/faq.html'

  });

  $urlRouterProvider.otherwise('/');
}]);
// angular.module("foodie").directive('slickSlider',function($timeout){
//  return {
//    restrict: 'A',
//    link: function(scope, element, attrs) {
//      $timeout(function() {
//          $(element).slick(scope.$eval(attrs.slickSlider));
//      });
//    }
//  }
// });

angular.module("foodie").directive('slickSliderFor', ["$timeout", function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $timeout(function () {
                $(element).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav',
                    autoplay: true
                });
            });
        }
    };
}]);
angular.module("foodie").directive('slickSliderNav', ["$timeout", function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $timeout(function () {
                $(element).slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    arrows: true,
                    centerMode: true,
                    focusOnSelect: true
                });
            });
        }
    };
}]);

angular.module('foodie').service('foodService', ["$http", "$stateParams", function ($http, $stateParams) {

  this.createFood = function (food) {
    return $http({
      method: "POST",
      url: "/api/food",
      data: food
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.updateFood = function (id, food) {
    return $http({
      method: "PUT",
      url: "/api/food" + id,
      data: food
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.deleteFood = function (id) {
    return $http({
      method: "DELETE",
      url: "/api/food" + id
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.editFood = function (id, food) {
    return $http({
      method: "PUT",
      url: "/api/food" + id,
      data: food
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.getFood = function (id, food) {
    return $http({
      method: "GET",
      url: "/api/food?_id=" + id
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.getFoods = function () {
    return $http({
      method: "GET",
      url: "/api/food"
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.getFoodByCategory = function (category) {
    return $http({
      method: "GET",
      url: "/api/food?category=" + category
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };
}]);
angular.module('foodie').service('googleService', ["$q", "$http", function ($q, $http) {

  // this.getGoogleData = function(restaurant) {
  //   return $http({
  //     method: 'GET',
  //     url: 'https://maps.google.com/maps/api/js'
  //   }).then(function(response){
  //     return response.data;
  //   })
  // }


}]);

// <div class="map"map-lazy-load="https://maps.google.com/maps/api/js">
//    <ng-map zoom="12" center="[{{userLocations[userLocations.length - 1].latitude}},{{userLocations[userLocations.length - 1].longitude}}]">
//      <marker position="[{{userLocations[userLocations.length - 1].latitude}},{{userLocations[userLocations.length - 1].longitude}}]" title="employee" ></marker>
//    </ng-map>
// </div>
//
// <script src="https://maps.google.com/maps/api/js?key=AIzaSyCE-IsoxmgBiFRKXn0ZgZcYlLZ1FSvpJns"></script>
//
// ng-map
angular.module("foodie").service("restaurantService", function () {});
angular.module("foodie").service("yelpService", ["$q", "$http", function ($q, $http) {

  this.getYelpData = function (restaurant) {
    return $http({
      method: 'GET',
      url: 'https://api.yelp.com/v2/business/' + restaurant + '?oauth_consumer_key=riPZBq-T0VWZErth_LDJKA&oauth_token=aZhOuGATxOIkkbPm6dk8vtpGIxuNECGp&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1468452808&oauth_nonce=IDKw02&oauth_version=1.0&oauth_signature=/XrNG5Ej3kVuygKB8fR71iz3TB0='
    }).then(function (response) {
      return response.data;
    });
  };
}]);
angular.module('foodie').directive('navbar', function () {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/navbar/navbar.html'
  };
});
angular.module('foodie').controller('dashboardCtrl', ["$scope", "dashboardService", function ($scope, dashboardService) {

  $scope.restaurantInfo = function () {
    dashboardService.getRestaurantInfo().then(function (response) {
      return response;
    });
  };

  $scope.updateRestaurantInfo = function (restaurant) {
    dashboardService.updateRestaurantInfoCall(restaurant).then(function (response) {
      $scope.restaurantInfo();
      return response;
    });
  };

  //ending
}]);
angular.module('foodie').service('dashboardService', ["$http", function ($http) {

  //gets restaurant info
  //also won't need id because of local auth
  this.getRestaurantInfo = function () {
    return $http({
      method: 'GET',
      url: '/api/restaurant'
    }).then(function (response) {
      console.log(response);
      return response.data;
    });
  };

  //updates restaurant info
  this.updateRestaurantInfoCall = function (restaurantObj) {
    return $http({
      method: 'PUT',
      url: '/api/restaurant',
      data: restaurantObj
    }).then(function (response) {
      console.log(response);
      return response.data;
    });
  };

  //ending
}]);
angular.module("foodie").controller("cartController", ["$scope", "cartService", function ($scope, cartService) {

  $scope.cart = {};

  $scope.getCart = function () {
    cartService.getCart().then(function (cart) {
      $scope.cart = cart;
    });
  };

  // $scope.getCart();
}]);
angular.module('foodie').controller('homeController', ["$scope", function ($scope) {}]);
angular.module("foodie").controller("menuController", ["$scope", "yelpService", "restaurantService", function ($scope, yelpService, restaurantService) {

  // $scope.getYelpData = function() {
  //   yelpService.getYelpData($scope.restaurant).then(function(data) {
  //     $scope.yelpData = data;
  //   })
  // }
  //
  // $scope.getYelpData();

  $scope.restaurant = {};

  $scope.getRestaurant = function () {
    restaurantService.getRestaurant($state.id).then(function (restaurant) {
      $scope.restaurant = restaurant;
    });
  };

  // $scope.getRestaurant();
}]);
angular.module('foodie').service('userService', ["$http", function ($http) {

  // something to post to users cart
  // someting to get posted items
  // something to delete items in the cart


  //probs for restaurant
  this.getUser = function () {
    return $http({
      method: 'GET',
      url: 'URL'
    }).then(function (response) {
      return response.data;
    });
  };

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
    }).then(function (response) {
      return response.data;
    });
  };

  this.deleteAccount = function () {
    return $http({
      method: 'DELETE',
      url: 'URL'
    }).then(function (response) {
      return response.data;
    });
  };

  //ending
}]);
angular.module("foodie").controller("orderController", ["$scope", "$http", function ($scope, $http) {

  $scope.orderFeed = function () {
    service.getOrder().then(function (response) {
      $scope.orderFeed = response;
    });
  };
}]);
angular.module("foodie").service("orderService", ["$http", function ($http) {

  this.getOrder = function () {
    return $http({
      method: 'GET',
      url: '/api/order/'
    }).then(function (response) {
      console.log("get" + response);
      return response.data;
    });
  };
}]);
angular.module('foodie').controller('restaurantController', ["$scope", "foodService", function ($scope, foodService) {}]);