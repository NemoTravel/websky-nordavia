var app = angular.module('app');

app.directive('checkAgreeByDefault', function () {
    return {
        restrict: 'A',
        link: function ($scope, $element) {
            $element.click();

            var $label = $('label[for="iconfirm"]');
            $label.attr('for', '');

        }
    }
});

