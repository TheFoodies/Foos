angular.module("foodie")
  .service("orderService", function($http){

    this.getOrder = function(){
      return $http({
          method: 'GET',
          url: '/api/order/'
        }).then(function (response) {
          console.log("get" + response);
          return response.data;
        })
        console.log(response.data);
    };
  });
