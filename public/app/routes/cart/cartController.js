angular.module("foodie").controller("cartController", function($scope, cartService) {

    $scope.cart = {
            items: [
              {
                item: {
                    name: "tacos",
                    price: 25,
                    description: "yummy tacos",
                    allergyInfo: "nuts"
                },
                quantity: 5,
                specialInstructions: "make em good boy"
            },
            {
                item: {
                    name: "more tacos",
                    price: 5,
                    description: "yummier tacos",
                    size: "L"
                },
                quantity: 300,
                specialInstructions: "make em even better"
            }
          ],
            restaurant: "BIG BOI TACOS"
        };

        $scope.getTotal = function() {
          $scope.total = 0;
          for (var i = 0; i < $scope.cart.items.length; i++) {
            $scope.total += ($scope.cart.items[i].item.price * $scope.cart.items[i].quantity);
          }
        }

        $scope.getTotal();

    // $scope.getCart = function() {
    //   cartService.getCart($scope.user._id).then(function(cart) {
    //     $scope.cart = cart;
    //   })
    // }
    //
    // $scope.getCart();
    //
    // $scope.updateCart = function(products, quantity) {
    //   cartService.updateCart(products, quantity, $scope.user._id).then(function(cart) {
    //     $scope.cart = cart;
    //   })
    // }

})
