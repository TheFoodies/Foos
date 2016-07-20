angular.module("foodie").directive('slickSliderNav', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $timeout(function() {
                $(element).slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    arrows: true,
                    centerMode: true,
                    focusOnSelect: true
                });
            });
        }
    }
});
