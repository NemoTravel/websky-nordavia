var app = angular.module('app');


app.directive('onlinePaymentRestrict', function(){
    return {
        controllerAs: 'vm',
        bindScopeToCont: false
    }
});