angular.module("foodie").controller("cartController", function($scope, $stateParams, orderService, cartService, restaurantService, user) {

    // $scope.cart = {
    //         items: [
    //           {
    //             item: {
    //                 name: "tacos",
    //                 price: 25,
    //                 description: "yummy tacos",
    //                 allergyInfo: "nuts"
    //             },
    //             quantity: 5,
    //             specialInstructions: "make em good boy"
    //         },
    //         {
    //             item: {
    //                 name: "more tacos",
    //                 price: 5,
    //                 description: "yummier tacos",
    //                 size: "L"
    //             },
    //             quantity: 300,
    //             specialInstructions: "make em even better"
    //         }
    //       ],
    //         restaurant: "BIG BOI TACOS"
    //     };



        $scope.getRestaurant = function() {
          restaurantService.getRestaurantInfo($stateParams.restaurantID).then(function(restaurant) {
            $scope.restaurant = restaurant;
            console.log(restaurant)
            $scope.menu = restaurant.menu;
          })
        }

        $scope.getRestaurant();


        $scope.emptyCart = function() {
          cartService.emptyCart($stateParams.restaurantID, user._id).then(function(cart) {
            $scope.getCart();
          })
        }



        $scope.getCart = function() {
          cartService.getCart($stateParams.restaurantID, user._id).then(function(cart) {
            console.log('this is the getCart', cart)
            $scope.order = cart;
            $scope.cart = cart.items;
            $scope.total = 0;
            for (var i = 0; i < $scope.cart.length; i++) {
              $scope.total += ($scope.cart[i].item.price * $scope.cart[i].quantity);
            }
          })
        }

        $scope.getCart();

        $scope.submitOrder = function() {
          delete $scope.order._id;
          orderService.submitOrder($scope.order).then(function(order) {
            console.log(order);
            $scope.emptyCart()
          })
        }

        $scope.removeFromCart = function(item) {
          cartService.removeFromCart(item, $stateParams.restaurantID, user._id).then(function(cart) {
            $scope.getCart();
          })
        }

        $scope.user = user;

        console.log(user)


})
