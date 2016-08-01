angular.module("foodie").controller("loginModalController", function($scope, close){

  $scope.close = close;
  $scope.userlogin = true;

  $scope.loginView = function () {
    if ($scope.userlogin = true) {
      $scope.usersignup = false;
      $scope.restlogin = false;
      $scope.restsignup = false;
    }
  }
  $scope.signupView = function () {
    if ($scope.usersignup = true) {
      $scope.userlogin = false;
      $scope.restlogin = false;
      $scope.restsignup = false;
    }
  }
  $scope.restLoginView = function () {
    if ($scope.restlogin = true) {
      $scope.userlogin = false;
      $scope.usersignup = false;
      $scope.restsignup = false;
    }
  }
  $scope.restSignupView = function () {
    if ($scope.restsignup = true) {
      $scope.userlogin = false;
      $scope.usersignup = false;
      $scope.restlogin = false;
    }
  }

})
