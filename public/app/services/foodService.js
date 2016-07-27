angular.module('foodie')
  .service('foodService', function($http, $stateParams){

    this.createFood = function(food){
      return $http({
        method: "POST",
        url: "/api/food/",
        data: food
      }).then(function(response){
        console.log(response.data);
        return response.data;
      })
    }

    this.updateFood = function(food){
      return $http({
        method: "PUT",
        url: "/api/food/",
        data: food
      }).then(function(response){
        console.log(response.data);
        return response.data;
      })
    }

    this.deleteFood = function(id){
      console.log(id);
      return $http({
        method: "DELETE",
        url: "/api/food/" + id
      }).then(function(response){
        console.log(response.data);
        return response.data;
      })
    }

    this.editFood = function(id, food){
      return $http({
        method: "PUT",
        url: "/api/food" + id,
        data: food
      }).then(function(response){
        console.log(response.data);
        return response.data;
      })
    }

    this.getFood = function(id, food) {
			return $http({
				method: "GET",
				url: "/api/food?_id=" + id,
			}).then(function(response) {
				console.log(response.data);
				return response.data;
			})
		}

    this.getFoods = function(){
      return $http({
        method: "GET",
        url: "/api/food"
      }).then(function(response){
        console.log(response.data);
        return response.data;
      })
    }

    this.getFoodByCategory = function(category){
      return $http({
        method: "GET",
        url: "/api/food?category=" + category
      }).then(function(response){
        console.log(response.data);
        return response.data;
      })
    }


  });
