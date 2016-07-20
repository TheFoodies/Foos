angular.module("foodie").service("yelpService", function($q, $http) {

  this.getYelpData = function(restaurant) {
    return $http({
      method: 'GET',
      url: 'https://api.yelp.com/v2/business/' + restaurant + '?oauth_consumer_key=riPZBq-T0VWZErth_LDJKA&oauth_token=aZhOuGATxOIkkbPm6dk8vtpGIxuNECGp&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1468452808&oauth_nonce=IDKw02&oauth_version=1.0&oauth_signature=/XrNG5Ej3kVuygKB8fR71iz3TB0='
    }).then(function(response) {
      return response.data;
    })
  }

})
