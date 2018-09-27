var app = angular.module('app');


app.directive('onlinePaymentRestrict', function () {
    return {
        controllerAs: 'restrictPayment',
        bindToController: true,
        controller: 'onlinePaymentRestrictController',
        scope: false
    }
});

app.controller('onlinePaymentRestrictController', ['$scope', '$location', onlinePaymentRestrictController]);

function onlinePaymentRestrictController($scope, $location) {

    var vm = this;


    vm.RESTRICT_REDIRECT_PAYMENT_FORMS = ['e-banking', 'electronic_money', 'plastic_card'];
    vm.restrictPayment = false;
    vm.orderInfo = $scope.$parent.vm.orderInfo;
    vm.showPaymentFrame = $scope.$parent.vm.showPaymentFrame;
    vm.allowPayment = handleAllowPaymentClick;


    $scope.$watch(angular.bind(this, function () {
        return vm.showPaymentFrame;
    }), function (newVal) {

        var paymentForm = vm.orderInfo.paymentform;

        if (_.contains(vm.RESTRICT_REDIRECT_PAYMENT_FORMS, paymentForm)) {
            $scope.$parent.vm.showPaymentFrame = false;
            vm.restrictPayment = true;

            // console.log(location.href.(/\?result-failed/));
            if (/\?result=failed/.test(location.href)) {
                $scope.$parent.vm.retryPayment();
            }

        }

    });

    function handleAllowPaymentClick() {
        $scope.$parent.vm.showPaymentFrame = true;
        vm.restrictPayment = false;
    }
}