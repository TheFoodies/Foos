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


    $scope.findAveragePrice = function() {
        var sum = 0;
        var items = 0;
        var average = 0;
        for (var i = 0; i < menu.length; i++) {

            for (var j = 0; j < menu[i].items.length; j++) {
                sum += menu[i].items[j].price;
                items += 1;
            }

        }
        average = sum / items;
        if (average > 0 && average <= 10) {
            $scope.averagePrice = "$";
        } else if (average > 10 && average <= 20) {
            $scope.averagePrice = "$$";
        } else if (average > 20 && average <= 30) {
            $scope.averagePrice = "$$$";
        } else {
            $scope.averagePrice = "$$$$";
        }
    }

    $scope.addToCart = function(item, quantity) {
        cartService.addToCart(item, quantity, $scope.user.id).then(function(cart) {
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
