// angular.module("foodie").controller("menuController2", function($scope, ngDialog, yelpService, cartService, restaurantService, $stateParams, userService, $state) {
//
//     // $scope.getYelpData = function() {
//     //   yelpService.getYelpData($scope.restaurant).then(function(data) {
//     //     $scope.yelpData = data;
//     //   })
//     // }
//     //
//     // $scope.getYelpData();
//
//     var getUser = function() {
//       return userService.getCurrentUser().then(function(response) {
//         console.log(response, 'cupcake');
//         if (!response)
//           // $state.go('login');
//         $scope.user = response;
//       }).catch(function(err) {
//         // $state.go('login');
//       });
//     }
//     getUser();
//     console.log($scope.user)
//
//     $scope.getRestaurant = function() {
//       restaurantService.getRestaurantInfo($stateParams.restaurantID).then(function(restaurant) {
//         $scope.restaurant = restaurant;
//         $scope.menu = restaurant.menu;
//       })
//     }
//
//     $scope.getRestaurant();
//
//
//     $scope.findAveragePrice = function() {
//         var sum = 0;
//         var items = 0;
//         var average = 0;
//         for (var i = 0; i < menu.length; i++) {
//
//             for (var j = 0; j < menu[i].items.length; j++) {
//                 sum += menu[i].items[j].price;
//                 items += 1;
//             }
//
//         }
//         average = sum / items;
//         if (average > 0 && average <= 10) {
//             $scope.averagePrice = "$";
//         } else if (average > 10 && average <= 20) {
//             $scope.averagePrice = "$$";
//         } else if (average > 20 && average <= 30) {
//             $scope.averagePrice = "$$$";
//         } else {
//             $scope.averagePrice = "$$$$";
//         }
//     }
//
//     $scope.addToCart = function(item, quantity, specialInstructions) {
//       var itemsObj = new Object();
//       itemsObj.item = item;
//       itemsObj.quantity = quantity;
//       itemsObj.specialInstructions = specialInstructions;
//       console.log(itemsObj, "this is the itemObj")
//         cartService.addToCart(itemsObj, $stateParams.restaurantID, user._id).then(function(cart) {
//             $scope.cart = cart;
//         })
//     }
//
//
//     $scope.restaurantImage = 'https://i.kinja-img.com/gawker-media/image/upload/wafswectpmbr0zmug9ly.jpg';
//
//
//     $scope.clickToOpen = function(item) {
//         var newScope = $scope.$new();
//         newScope.item = item;
//         ngDialog.open({
//             template: './app/routes/menu/item-modal.html',
//             scope: newScope,
//         });
//     };
//
//     $scope.quantity = 1;
//
//     $scope.addQuantity = function() {
//         $scope.quantity++;
//     }
//
//     $scope.removeQuantity = function() {
//         if ($scope.quantity > 1) {
//             $scope.quantity--;
//         }
//     }
//
//
//
//
//
//
// })
