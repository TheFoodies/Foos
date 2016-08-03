angular.module("foodie")
  .service("orderService", function($http){

    this.getOrders = function(){
      console.log("running getOrders service")
      return $http({
          method: 'GET',
          url: '/api/order/'
        }).then(function (response) {
          console.log("get order" + response);
          return response;
        })
    };

    this.submitOrder = function(order) {
      return $http({
        method: 'POST',
        url: '/api/order/',
        data: order
      }).then(function(response) {
        console.log(response)
        return response;
      });
    };


    this.completeOrder = function(id) {
      console.log(id)
      return $http({
        method: 'PUT',
        url: '/api/order/completed/' + id,
        data: {completed: true}
      }).then(function(response) {
        return response;
      })
    }

    this.finishedOrder = function(id) {
      console.log(id)
      return $http({
        method: 'PUT',
        url: '/api/order/completed/' + id,
        data: {pickup: true}
      }).then(function(response) {
        return response;
      })
    }

  });
