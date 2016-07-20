// angular.module("foodie").directive('slickSlider',function($timeout){
//  return {
//    restrict: 'A',
//    link: function(scope, element, attrs) {
//      $timeout(function() {
//          $(element).slick(scope.$eval(attrs.slickSlider));
//      });
//    }
//  }
// });

angular.module("foodie").directive('slickSliderFor', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $timeout(function() {
                $(element).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav',
                    autoplay: true
                });
            });
        }
    }
});
