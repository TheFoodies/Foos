angular.module("foodie").controller("menuController", function($scope, ngDialog, yelpService, cartService, restaurantService, $stateParams, userService, $state, user) {

  // $scope.getUser = function() {
  //   userService.getCurrentUser().then(function(response) {
  //     console.log(response, 'cupcake');
  //     $scope.user = response;
  //     if (!response) {
  //       // $state.go('login');
  //     }
  //     $scope.user = response;
  //   }).catch(function(err) {
  //     // $state.go('login');
  //   });
  // }
  // $scope.getUser();

  $scope.user = user;

  $scope.getRestaurant = function() {
    restaurantService.getRestaurantInfo($stateParams.restaurantID).then(function(restaurant) {
      $scope.restaurant = restaurant;
      $scope.menu = restaurant.menu;
    })
  }

  $scope.getRestaurant();


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

  $scope.getCart = function() {
    cartService.getCart($stateParams.restaurantID, user._id).then(function(cart) {
      console.log('this is the getCart', cart)
      $scope.cart = cart;
    })
  }

  $scope.getCart();

  $scope.addToCart = function(item, quantity, specialInstructions) {
    var itemsObj = new Object();
    itemsObj.item = item;
    itemsObj.quantity = quantity;
    itemsObj.specialInstructions = specialInstructions;
    console.log(itemsObj);
      cartService.addToCart(itemsObj, $stateParams.restaurantID, user._id).then(function(cart) {
        console.log('here is the cart', cart.items);

          ngDialog.close();
          $scope.cart = cart.items;
      })
  }


  $scope.restaurantImage = 'https://i.kinja-img.com/gawker-media/image/upload/wafswectpmbr0zmug9ly.jpg';


  $scope.clickToOpen = function(item) {
      var newScope = $scope.$new();
      newScope.item = item;
      ngDialog.open({
          template: './app/routes/menu/item-modal.html',
          scope: newScope,
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



    $scope.cart = [{
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawdaw",
        "_id": "579b911e12f59fb50f375e99"
    }, {
        "item": {
            "_id": "579a67fef4b191aabf3c44bf",
            "name": "Cheese",
            "price": 4.99,
            "description": "Burrito with mucho Cheese",
            "allergyInfo": "Monterrey-Jack",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": true,
                "medium": false,
                "small": false
            }
        },
        "quantity": 5,
        "specialInstructions": "awdawdawdawdaw",
        "_id": "579b912612f59fb50f375e9a"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b919e49bd10f30f56651d"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "dawdaw",
        "_id": "579b922000053d45104f9dfd"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b9245c007ed5b10e5e9cd"
    }, {
        "item": {
            "_id": "579a67fef4b191aabf3c44bf",
            "name": "Cheese",
            "price": 4.99,
            "description": "Burrito with mucho Cheese",
            "allergyInfo": "Monterrey-Jack",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": true,
                "medium": false,
                "small": false
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b92a6b732519510c553f0"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b92d5005c12bd1084d9a1"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b93a1f6dc78f4106a7218"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b96a4cec21ed511015c8d"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b99caec25c6ea134f8a6e"
    }, {
        "item": {
            "_id": "579a67fef4b191aabf3c44bf",
            "name": "Cheese",
            "price": 4.99,
            "description": "Burrito with mucho Cheese",
            "allergyInfo": "Monterrey-Jack",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": true,
                "medium": false,
                "small": false
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b99e6ec25c6ea134f8a6f"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b9a19b1b1d4021421cfa6"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b9b071f25b35f1424c5fd"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b9b547870dc811480916e"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b9b7b5ffb229b14056970"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b9c06e31379af14a0741e"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdadw",
        "_id": "579b9c1fe31379af14a0741f"
    }, {
        "item": {
            "_id": "579a67fef4b191aabf3c44bf",
            "name": "Cheese",
            "price": 4.99,
            "description": "Burrito with mucho Cheese",
            "allergyInfo": "Monterrey-Jack",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": true,
                "medium": false,
                "small": false
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b9c6ee31379af14a07420"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b9c98e31379af14a07421"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b9cb0e31379af14a07422"
    }, {
        "item": {
            "_id": "579a67fef4b191aabf3c44bf",
            "name": "Cheese",
            "price": 4.99,
            "description": "Burrito with mucho Cheese",
            "allergyInfo": "Monterrey-Jack",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": true,
                "medium": false,
                "small": false
            }
        },
        "quantity": 1,
        "specialInstructions": "awdawd",
        "_id": "579b9d07e31379af14a07423"
    }, {
        "item": {
            "_id": "579b8892117f0fa0c3878d86",
            "name": "Carne Asada",
            "price": 4.99,
            "description": "Yummy steak tacos",
            "allergyInfo": "Steak",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": false,
                "medium": true,
                "small": true
            }
        },
        "quantity": 1,
        "specialInstructions": "adawdaw",
        "_id": "579b9d63e31379af14a07424"
    }, {
        "item": {
            "_id": "579a67fef4b191aabf3c44bf",
            "name": "Cheese",
            "price": 4.99,
            "description": "Burrito with mucho Cheese",
            "allergyInfo": "Monterrey-Jack",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": true,
                "medium": false,
                "small": false
            }
        },
        "quantity": 1,
        "specialInstructions": "cehes",
        "_id": "579b9e28cf09df1b15d18fc6"
    }, {
        "item": {
            "_id": "579a67fef4b191aabf3c44bf",
            "name": "Cheese",
            "price": 4.99,
            "description": "Burrito with mucho Cheese",
            "allergyInfo": "Monterrey-Jack",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": true,
                "medium": false,
                "small": false
            }
        },
        "quantity": 1,
        "specialInstructions": "cdhes",
        "_id": "579b9e6ecf09df1b15d18fc7"
    }, {
        "item": {
            "_id": "579a67fef4b191aabf3c44bf",
            "name": "Cheese",
            "price": 4.99,
            "description": "Burrito with mucho Cheese",
            "allergyInfo": "Monterrey-Jack",
            "restaurant": "5797cff7dd80b7d4b60c04df",
            "__v": 0,
            "size": {
                "large": true,
                "medium": false,
                "small": false
            }
        },
        "quantity": 1,
        "specialInstructions": "awd",
        "_id": "579b9f03cf09df1b15d18fc8"
    }]






})
