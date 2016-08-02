angular.module("foodie", ["ui.router", "ngDialog", "ngMap", "angularModalService"]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './app/routes/home/home.html',
    controller: 'homeController'

  })

  // log in / sign up states //
  // This is the only place that is linking the loginController to these views.

  .state('usersignup', {
    url: '/user/signup',
    templateUrl: './app/routes/home/userSignup.html',
    controller: 'homeController'
  }).state('userlogin', {
    url: '/user/login',
    templateUrl: './app/routes/home/userLogin.html',
    controller: 'homeController'
  }).state('trucksignup', {
    url: '/truck/signup',
    templateUrl: './app/routes/home/truckSignup.html',
    controller: 'homeController'
  }).state('trucklogin', {
    url: '/truck/login',
    templateUrl: './app/routes/home/truckLogin.html',
    controller: 'homeController'
  })
  // log in / sign up states End //

  .state('restaurants', {
    url: '/restaurants',
    templateUrl: './app/routes/restaurant/restaurant.html',
    controller: 'restaurantController'
  }).state('menu', {
    url: '/restaurant/:restaurantID',
    templateUrl: './app/routes/menu/menu.html',
    controller: 'menuController',
    resolve: {
      user: ["userService", "$state", function (userService, $state) {
        return userService.getCurrentUser().then(function (response) {
          console.log(response, 'cupcake');
          if (!response) {
            // $state.go('login');
          }

          return response;
        }).catch(function (err) {
          // $state.go('login');
        });
      }]
    }
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
    url: '/cart/:restaurantID',
    templateUrl: './app/routes/cart/cart.html',
    controller: 'cartController',
    resolve: {
      user: ["userService", "$state", function (userService, $state) {
        return userService.getCurrentUser().then(function (response) {
          console.log(response, 'cupcake');
          if (!response) {
            // $state.go('login');
          }

          return response;
        }).catch(function (err) {
          // $state.go('login');
        });
      }]
    }
  }).state('cartSuccess', {
    url: '/success',
    templateUrl: './app/routes/success/success.html',
    controller: 'cartController'
  }).state('dashboard.order', {
    url: '/order',
    templateUrl: './app/routes/order/order.html',
    controller: 'orderController'
  }).state('dashboard', {
    url: '/dashboard/:id',
    templateUrl: './app/routes/dashboard/dashboard.html'
  }).state('dashboard.map', {
    url: '/map/:id',
    templateUrl: './app/routes/dashboard/map.html',
    controller: 'mapController'
  }).state('dashboard.menu', {
    url: '/menu/:id',
    templateUrl: './app/routes/dashboard/menu.html',
    controller: 'dashboardMenuController'
  }).state('faq', {
    url: '/faq',
    templateUrl: './app/routes/faq/faq.html'
  });

  $urlRouterProvider.otherwise('/');
}]);
angular.module("foodie").directive('slick', ["$timeout", function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $timeout(function () {
                $(element).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    fade: true
                });
            });
        }
    };
}]);
angular.module("foodie").service("cartService", ["$http", "$q", function ($http, $q) {

  this.getCart = function (restaurant, user) {
    return $http({
      method: 'GET',
      url: '/api/cart/' + restaurant + '/' + user
    }).then(function (cart) {
      return cart.data;
    });
  };

  this.addToCart = function (itemObj, restaurant, user) {
    console.log(itemObj);
    return $http({
      method: 'PUT',
      url: '/api/cart/' + restaurant + '/' + user,
      data: itemObj
    }).then(function (cart) {
      return cart.data;
    });
  };

  this.updateCart = function (product, quantity, id) {
    return $http({
      method: 'PUT',
      url: '/api/cart/' + id,
      data: {
        "product": product,
        "quantity": quantity
      }
    }).then(function (cart) {
      return cart.data;
    });
  };

  this.emptyCart = function (restaurant, user) {
    return $http({
      method: 'PUT',
      url: '/api/cart/empty/' + restaurant + '/' + user
    }).then(function (cart) {
      return cart.data;
    });
  };

  this.removeFromCart = function (item, restaurant, user) {
    console.log(item);
    return $http({
      method: 'PUT',
      url: '/api/cart/removeItem/' + restaurant + '/' + user,
      data: item
    }).then(function (response) {
      return response.data;
    });
  };
}]);
angular.module('foodie').service('foodService', ["$http", "$stateParams", function ($http, $stateParams) {

  this.createFood = function (food) {
    return $http({
      method: "POST",
      url: "/api/food/",
      data: food
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.updateFood = function (food) {
    return $http({
      method: "PUT",
      url: "/api/food/",
      data: food
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.deleteFood = function (id) {
    console.log(id);
    return $http({
      method: "DELETE",
      url: "/api/food/" + id
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
angular.module("foodie").service("restaurantService", ["$http", function ($http) {

  this.getRestaurantInfo = function (id) {
    return $http({
      method: 'GET',
      url: '/api/restaurant/' + id
    }).then(function (response) {
      console.log(response);
      return response.data;
    });
  };

  this.getAllRestaurantInfo = function () {
    return $http({
      method: 'GET',
      url: '/api/restaurant/'
    }).then(function (response) {
      console.log(response);
      return response.data;
    });
  };

  this.updateRestaurantInfo = function (restaurantObj) {
    return $http({
      method: 'PUT',
      url: '/api/restaurant',
      data: restaurantObj
    }).then(function (response) {
      console.log(response.menu);
      return response.data;
    });
  };
  this.loginRest = function (restaurant) {
    return $http({
      method: 'POST',
      url: '/login/restaurant',
      data: restaurant
    }).then(function (response) {
      return response;
    });
  };

  this.logoutRest = function () {
    return $http({
      method: 'GET',
      url: '/logout/restaurant'
    }).then(function (response) {
      return response;
    });
  };

  this.getCurrentRestaurant = function () {
    return $http({
      method: 'GET',
      url: '/me/restaurant'
    }).then(function (response) {
      return response;
    });
  };

  this.registerRestaurant = function (user) {
    return $http({
      method: 'POST',
      url: '/register/restaurant',
      data: user
    }).then(function (response) {
      return response;
    });
  };

  this.AddToMenu = function (category, menuObj) {
    console.log(menuObj);
    return $http({
      method: "PUT",
      url: '/api/restaurant/' + category,
      data: menuObj
    }).then(function (response) {
      return response;
    });
  };

  this.addCategory = function (category) {
    console.log(category);
    return $http({
      method: "PUT",
      url: '/api/restaurant/category',
      data: { name: category, items: [] }
    }).then(function (response) {
      return response;
    });
  };

  this.editCategory = function (category, newCategory) {
    console.log(category);
    return $http({
      method: "PUT",
      url: '/api/restaurant/' + category,
      data: { newCategory }
    }).then(function (response) {
      return response;
    });
  };
}]);
angular.module('foodie').service('userService', ["$http", function ($http) {

  this.login = function (user) {
    return $http({
      method: 'POST',
      url: '/login/user',
      data: user
    }).then(function (response) {
      return response;
    });
  };

  this.logout = function () {
    return $http({
      method: 'GET',
      url: '/logout/user'
    }).then(function (response) {
      return response;
    });
  };

  this.getCurrentUser = function () {
    return $http({
      method: 'GET',
      url: '/me/user'
    }).then(function (response) {
      return response.data;
    });
  };

  this.registerUser = function (user) {
    return $http({
      method: 'POST',
      url: '/register/user',
      data: user
    }).then(function (response) {
      return response;
    });
  };

  //ending
}]);
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
    templateUrl: './app/directives/navbar/navbar.html',
    controller: 'homeController'
  };
});
/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;
		/******/
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.loaded = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

	'use strict';

	//  angularModalService.js
	//
	//  Service for showing modal dialogs.

	/***** JSLint Config *****/
	/*global angular  */

	(function () {

		'use strict';

		var module = angular.module('angularModalService', []);

		module.factory('ModalService', ['$animate', '$document', '$compile', '$controller', '$http', '$rootScope', '$q', '$templateRequest', '$timeout', function ($animate, $document, $compile, $controller, $http, $rootScope, $q, $templateRequest, $timeout) {

			function ModalService() {

				var self = this;

				//  Returns a promise which gets the template, either
				//  from the template parameter or via a request to the
				//  template url parameter.
				var getTemplate = function getTemplate(template, templateUrl) {
					var deferred = $q.defer();
					if (template) {
						deferred.resolve(template);
					} else if (templateUrl) {
						$templateRequest(templateUrl, true).then(function (template) {
							deferred.resolve(template);
						}, function (error) {
							deferred.reject(error);
						});
					} else {
						deferred.reject("No template or templateUrl has been specified.");
					}
					return deferred.promise;
				};

				//  Adds an element to the DOM as the last child of its container
				//  like append, but uses $animate to handle animations. Returns a
				//  promise that is resolved once all animation is complete.
				var appendChild = function appendChild(parent, child) {
					var children = parent.children();
					if (children.length > 0) {
						return $animate.enter(child, parent, children[children.length - 1]);
					}
					return $animate.enter(child, parent);
				};

				self.showModal = function (options) {

					//  Get the body of the document, we'll add the modal to this.
					var body = angular.element($document[0].body);

					//  Create a deferred we'll resolve when the modal is ready.
					var deferred = $q.defer();

					//  Validate the input parameters.
					var controllerName = options.controller;
					if (!controllerName) {
						deferred.reject("No controller has been specified.");
						return deferred.promise;
					}

					//  Get the actual html of the template.
					getTemplate(options.template, options.templateUrl).then(function (template) {

						//  Create a new scope for the modal.
						var modalScope = (options.scope || $rootScope).$new();
						var rootScopeOnClose = $rootScope.$on('$locationChangeSuccess', cleanUpClose);

						//  Create the inputs object to the controller - this will include
						//  the scope, as well as all inputs provided.
						//  We will also create a deferred that is resolved with a provided
						//  close function. The controller can then call 'close(result)'.
						//  The controller can also provide a delay for closing - this is
						//  helpful if there are closing animations which must finish first.
						var closeDeferred = $q.defer();
						var closedDeferred = $q.defer();
						var inputs = {
							$scope: modalScope,
							close: function close(result, delay) {
								if (delay === undefined || delay === null) delay = 0;
								$timeout(function () {

									cleanUpClose(result);
								}, delay);
							}
						};

						//  If we have provided any inputs, pass them to the controller.
						if (options.inputs) angular.extend(inputs, options.inputs);

						//  Compile then link the template element, building the actual element.
						//  Set the $element on the inputs so that it can be injected if required.
						var linkFn = $compile(template);
						var modalElement = linkFn(modalScope);
						inputs.$element = modalElement;

						//  Create the controller, explicitly specifying the scope to use.
						var controllerObjBefore = modalScope[options.controllerAs];
						var modalController = $controller(options.controller, inputs, false, options.controllerAs);

						if (options.controllerAs && controllerObjBefore) {
							angular.extend(modalController, controllerObjBefore);
						}

						//  Finally, append the modal to the dom.
						if (options.appendElement) {
							// append to custom append element
							appendChild(options.appendElement, modalElement);
						} else {
							// append to body when no custom append element is specified
							appendChild(body, modalElement);
						}

						//  We now have a modal object...
						var modal = {
							controller: modalController,
							scope: modalScope,
							element: modalElement,
							close: closeDeferred.promise,
							closed: closedDeferred.promise
						};

						//  ...which is passed to the caller via the promise.
						deferred.resolve(modal);

						function cleanUpClose(result) {

							//  Resolve the 'close' promise.
							closeDeferred.resolve(result);

							//  Let angular remove the element and wait for animations to finish.
							$animate.leave(modalElement).then(function () {
								//  Resolve the 'closed' promise.
								closedDeferred.resolve(result);

								//  We can now clean up the scope
								modalScope.$destroy();

								//  Unless we null out all of these objects we seem to suffer
								//  from memory leaks, if anyone can explain why then I'd
								//  be very interested to know.
								inputs.close = null;
								deferred = null;
								closeDeferred = null;
								modal = null;
								inputs = null;
								modalElement = null;
								modalScope = null;
							});

							// remove event watcher
							rootScopeOnClose && rootScopeOnClose();
						}
					}).then(null, function (error) {
						// 'catch' doesn't work in IE8.
						deferred.reject(error);
					});

					return deferred.promise;
				};
			}

			return new ModalService();
		}]);
	})();

	/***/
}
/******/]);
//# sourceMappingURL=angular-modal-service.js.map
angular.module("foodie").controller("loginModalController", ["$scope", "close", function ($scope, close) {

  $scope.close = close;
  $scope.userlogin = true;

  $scope.loginView = function () {
    if ($scope.userlogin = true) {
      $scope.usersignup = false;
      $scope.restlogin = false;
      $scope.restsignup = false;
    }
  };
  $scope.signupView = function () {
    if ($scope.usersignup = true) {
      $scope.userlogin = false;
      $scope.restlogin = false;
      $scope.restsignup = false;
    }
  };
  $scope.restLoginView = function () {
    if ($scope.restlogin = true) {
      $scope.userlogin = false;
      $scope.usersignup = false;
      $scope.restsignup = false;
    }
  };
  $scope.restSignupView = function () {
    if ($scope.restsignup = true) {
      $scope.userlogin = false;
      $scope.usersignup = false;
      $scope.restlogin = false;
    }
  };
}]);
angular.module('foodie').controller('dashboardMenuController', ["$scope", "$stateParams", "ngDialog", "restaurantService", "foodService", function ($scope, $stateParams, ngDialog, restaurantService, foodService) {

  $scope.restaurantInfo = function () {
    console.log('get restaurantInfo');

    restaurantService.getRestaurantInfo($stateParams.id).then(function (response) {
      console.log(response.menu);
      $scope.menu = response.menu;
      $scope.restaurantObj = response;
    });
  };
  $scope.restaurantInfo();

  $scope.updateRestaurantInfo = function (restaurantObj) {
    restaurantService.updateRestaurantInfo(restaurantObj).then(function (response) {
      $scope.restaurantInfo();
      return response;
    });
  };

  $scope.addFood = function (newItemObj) {
    console.log(newItemObj);
    newItemObj.restaurant = $stateParams.id;
    foodService.createFood(newItemObj).then(function (response) {
      // $scope.restaurantInfo();
      console.log(response);
      $scope.AddToMenu(response);
    });
  };
  $scope.updateFood = function (menuObj) {
    foodService.updateFood(menuObj).then(function (response) {
      $scope.restaurantInfo();
      ngDialog.close();
      return response;
    });
  };

  $scope.deleteFood = function (food) {
    foodService.deleteFood(food._id).then(function (response) {
      $scope.restaurantInfo();
      ngDialog.close();
      return response;
    });
  };

  $scope.AddToMenu = function (MenuObj) {
    var category = $scope.category;
    console.log($scope.category);
    restaurantService.AddToMenu($scope.category, MenuObj).then(function (response) {
      return response;
      $scope.restaurantInfo();
      ngDialog.close();
    });
  };

  $scope.clickToOpen = function (item) {
    var newScope = $scope.$new();
    newScope.item = item;
    ngDialog.open({
      template: './app/routes/dashboard/menu-modal.html',
      scope: newScope
    });
  };

  $scope.AddItem = function (category) {
    var newScope = $scope.$new();
    newScope.category = category;
    console.log(category);
    ngDialog.open({
      template: './app/routes/dashboard/newItem.html',
      controller: 'dashboardMenuController',
      scope: newScope
    });
  };

  $scope.addCategory = function (category) {
    console.log(category);
    restaurantService.addCategory(category).then(function (response) {
      $scope.restaurantInfo();
    });
  };

  $scope.editCategory = function (category, updatedCategoryName) {
    console.log(category, $scope.updatedCategoryName);
    restaurantService.editCategory(category, updatedCategoryName).then(function (response) {
      $scope.restaurantInfo();
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
angular.module("foodie").controller("mapController", ["$scope", function ($scope) {

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
  });

  $scope.getUserLocation = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        $scope.lat = pos.coords.longitude.toFixed(2);
        $scope.lon = pos.coords.latitude.toFixed(2);
        $scope.location = '[' + $scope.lon + ', ' + $scope.lat + ']';
        console.log($scope.location);
      }, function (error) {
        $scope.lat = $scope.user.location[1];
        $scope.lon = $scope.user.location[0];
      }, {
        timeout: 5 * 1000,
        maximumAge: 1000 * 60 * 15,
        enableHighAccuracy: true
      });
    }
  };
  $scope.getUserLocation();
}]);
angular.module("foodie").controller("cartController", ["$scope", "$stateParams", "orderService", "cartService", "restaurantService", "user", function ($scope, $stateParams, orderService, cartService, restaurantService, user) {

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


  $scope.getRestaurant = function () {
    restaurantService.getRestaurantInfo($stateParams.restaurantID).then(function (restaurant) {
      $scope.restaurant = restaurant;
      console.log(restaurant);
      $scope.menu = restaurant.menu;
    });
  };

  $scope.getRestaurant();

  $scope.emptyCart = function () {
    cartService.emptyCart($stateParams.restaurantID, user._id).then(function (cart) {
      $scope.getCart();
    });
  };

  $scope.getCart = function () {
    cartService.getCart($stateParams.restaurantID, user._id).then(function (cart) {
      console.log('this is the getCart', cart);
      $scope.order = cart;
      $scope.cart = cart.items;
      $scope.total = 0;
      for (var i = 0; i < $scope.cart.length; i++) {
        $scope.total += $scope.cart[i].item.price * $scope.cart[i].quantity;
      }
    });
  };

  $scope.getCart();

  $scope.submitOrder = function () {
    delete $scope.order._id;
    orderService.submitOrder($scope.order).then(function (order) {
      console.log(order);
      $scope.emptyCart();
    });
  };

  $scope.removeFromCart = function (item) {
    cartService.removeFromCart(item, $stateParams.restaurantID, user._id).then(function (cart) {
      $scope.getCart();
    });
  };

  $scope.user = user;

  console.log(user);
}]);
angular.module('foodie').controller('homeController', ["$scope", "userService", "restaurantService", "$state", "ngDialog", "ModalService", function ($scope, userService, restaurantService, $state, ngDialog, ModalService) {

  // $scope.user = user;

  $scope.login = function (user) {
    userService.login(user).then(function (response) {
      if (!response.data) {
        alert('User does not exist');
        $scope.user.password = '';
      } else {
        $state.go('restaurants');
        ngDialog.close();
      }
    }).catch(function (err) {
      alert('Unable to login');
    });
  };

  $scope.register = function (user) {
    userService.registerUser(user).then(function (response) {
      if (!response.data) {
        alert('Unable to create user');
      } else {
        alert('User Created');
        $scope.newUser = {};
      }
    }).catch(function (err) {
      alert('Unable to create user');
    });
  };

  $scope.logout = function (user) {
    userService.logout().then(function (response) {
      setTimeout(function () {
        $state.go('menu');
        return response;
      }, 300);
    });
  };

  ///////////


  $scope.loginRest = function (restaurant) {
    restaurantService.loginRest(restaurant).then(function (response) {
      if (!response.data) {
        alert('User does not exist');
        $scope.restaurant.password = '';
      } else {
        $state.go('dashboard.menu', { id: response.data._id });
        ngDialog.close();
      }
    }).catch(function (err) {
      alert('Unable to login');
    });
  };

  $scope.registerRest = function (restaurant) {
    restaurantService.registerRestaurant(restaurant).then(function (response) {
      if (!response.data) {
        alert('Unable to create restaurant');
      } else {
        alert('Restaurant Created');
        $scope.newRestaurant = {};
      }
    }).catch(function (err) {
      alert('Unable to create restaurant');
    });
  };

  $scope.logoutRest = function (restaurant) {
    restaurantService.logoutRest().then(function (response) {
      setTimeout(function () {
        $state.go('menu');
        return response;
      }, 300);
    });
  };

  $scope.openLogin = function () {
    ModalService.showModal({
      templateUrl: "./app/modals/login/login-template.html",
      controller: "loginModalController"
    }).then(function (modal) {
      // Function that runs when modal closes
      modal.close.then(function (then) {
        $scope.confirmationAnswer = then;
      });
    });
  };
}]);
angular.module("foodie").controller("menuController", ["$scope", "ngDialog", "yelpService", "cartService", "restaurantService", "$stateParams", "userService", "$state", "user", function ($scope, ngDialog, yelpService, cartService, restaurantService, $stateParams, userService, $state, user) {

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

    $scope.getRestaurant = function () {
        restaurantService.getRestaurantInfo($stateParams.restaurantID).then(function (restaurant) {
            $scope.restaurant = restaurant;
            $scope.menu = restaurant.menu;
        });
    };

    $scope.getRestaurant();

    $scope.findAveragePrice = function () {
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
    };

    $scope.getCart = function () {
        cartService.getCart($stateParams.restaurantID, user._id).then(function (cart) {
            console.log('this is the getCart', cart);
            $scope.cart = cart.items;
            $scope.total = 0;
            for (var i = 0; i < $scope.cart.length; i++) {
                $scope.total += $scope.cart[i].item.price * $scope.cart[i].quantity;
            }
        });
    };

    $scope.getCart();

    $scope.addToCart = function (item, quantity, specialInstructions) {
        var itemsObj = new Object();
        itemsObj.item = item;
        itemsObj.quantity = quantity;
        itemsObj.specialInstructions = specialInstructions;
        console.log(itemsObj);
        cartService.addToCart(itemsObj, $stateParams.restaurantID, user._id).then(function (cart) {
            console.log('here is the cart', cart.items);

            ngDialog.close();
            $scope.cart = cart.items;
        });
    };

    $scope.restaurantImage = 'https://i.kinja-img.com/gawker-media/image/upload/wafswectpmbr0zmug9ly.jpg';

    $scope.clickToOpen = function (item) {
        var newScope = $scope.$new();
        newScope.item = item;
        ngDialog.open({
            template: './app/routes/menu/item-modal.html',
            scope: newScope
        });
    };

    $scope.quantity = 1;

    $scope.addQuantity = function () {
        $scope.quantity++;
    };

    $scope.removeQuantity = function () {
        if ($scope.quantity > 1) {
            $scope.quantity--;
        }
    };
}]);
angular.module("foodie").controller("orderController", ["$scope", "$http", "orderService", function ($scope, $http, orderService) {

  // $scope.orderFeed = function(){
  //   service.getOrder().then(function (response){
  //     $scope.orderFeed = response;
  //     console.log(response);
  //   })
  //   console.log(response);

  $scope.getOrders = function () {
    orderService.getOrders().then(function (orders) {

      console.log("here are the orders", orders.items);
      console.log("here are the orders", orders);
      $scope.orders = orders.data;
    });
  };

  $scope.getOrders();

  $scope.completeOrder = function (id) {
    orderService.completeOrder(id).then(function (orders) {
      $scope.getOrders();
    });
  };

  $scope.finishedOrder = function (id) {
    orderService.finishedOrder(id).then(function (orders) {
      $scope.getOrders();
    });
  };
}]);
angular.module("foodie").service("orderService", ["$http", function ($http) {

  this.getOrders = function () {
    console.log("running getOrders service");
    return $http({
      method: 'GET',
      url: '/api/order/'
    }).then(function (response) {
      console.log("get order" + response);
      return response;
    });
  };

  this.submitOrder = function (order) {
    return $http({
      method: 'POST',
      url: '/api/order/',
      data: order
    }).then(function (response) {
      console.log(response);
      return response;
    });
  };

  this.completeOrder = function (id) {
    console.log(id);
    return $http({
      method: 'PUT',
      url: '/api/order/completed/' + id,
      data: { completed: true }
    }).then(function (response) {
      return response;
    });
  };

  this.finishedOrder = function (id) {
    console.log(id);
    return $http({
      method: 'PUT',
      url: '/api/order/completed/' + id,
      data: { pickup: true }
    }).then(function (response) {
      return response;
    });
  };
}]);
angular.module('foodie').controller('restaurantController', ["$scope", "restaurantService", function ($scope, restaurantService) {
    $scope.getRestaurantInfo = function () {
        restaurantService.getAllRestaurantInfo().then(function (response) {
            $scope.restaurants = response;
            console.log(response);
        });
    };
    $scope.getRestaurantInfo();

    $scope.findAveragePrice = function () {
        var sum = 0;
        var items = 0;
        var average = 0;
        for (var i = 0; i < $scope.restaurants.menu.length; i++) {

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
    };
}]);