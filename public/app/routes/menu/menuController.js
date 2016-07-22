angular.module("foodie").controller("menuController", function($scope, ngDialog, yelpService, cartService) {

    // $scope.getYelpData = function() {
    //   yelpService.getYelpData($scope.restaurant).then(function(data) {
    //     $scope.yelpData = data;
    //   })
    // }
    //
    // $scope.getYelpData();

    // $scope.restaurant = {};
    //
    // $scope.getRestaurant = function() {
    //   restaurantService.getRestaurant($state.id).then(function(restaurant) {
    //     $scope.restaurant = restaurant;
    //   })
    // }

    // $scope.getRestaurant();


    $scope.menu = [
      {
        name: "pizza",
        items: [
                {name: "Pizza",
                price: 25,
                description: "a delicious pizza",
                images: ["https://www.cicis.com/media/1137/pizza_trad_alfredo.png", "http://www.mysticpizza.com/admin/resources/pizza-pepperoni-w857h456.jpg"],
                sizes: ["S", "M", "L"]},
                {name: "Pizza",
                price: 25,
                description: "a delicious pizza",
                images: ["https://www.cicis.com/media/1137/pizza_trad_alfredo.png", "http://www.mysticpizza.com/admin/resources/pizza-pepperoni-w857h456.jpg"],
                sizes: ["S", "M", "L"]},
                {name: "Pizza",
                price: 25,
                description: "a delicious pizza",
                images: ["https://www.cicis.com/media/1137/pizza_trad_alfredo.png", "http://www.mysticpizza.com/admin/resources/pizza-pepperoni-w857h456.jpg"],
                sizes: ["S", "M", "L"]},
        ]
      },
      {
        name: "better pizza",
        items: [
                {name: "Better Pizza",
                price: 50,
                description: "a more delicious pizza",
                images: ["https://www.cicis.com/media/1137/pizza_trad_alfredo.png", "http://www.mysticpizza.com/admin/resources/pizza-pepperoni-w857h456.jpg"],
                sizes: ["S", "M", "L", "XL"]},
            ]
      }
    ]

    $scope.cart = {
      items: []
    };

    $scope.addToCart = function(item) {
      cartService.addToCart(item, $scope.quantity, $scope.user.id).then(function(cart) {
        $scope.cart = cart;
      })
    }


    $scope.restaurantImage = 'https://i.kinja-img.com/gawker-media/image/upload/wafswectpmbr0zmug9ly.jpg';


    $scope.clickToOpen = function(item) {
        var newScope = $scope.$new();
        newScope.item = item;
        ngDialog.open({
            template: './app/routes/menu/item-modal.html',
            scope: newScope
        });
    };

    $scope.quantity = 1;

    $scope.addQuantity = function() {
      $scope.quantity++;
    }

    $scope.removeQuantity = function() {
      if ($scope.quantity > 1) {
        $scope.quantity--;
      }
    }





})
