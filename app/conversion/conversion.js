(function() {
    'use strict';

    angular.module('converterApp.conversion', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/conversion', {
        templateUrl: 'conversion/conversion.html',
        controller: 'ConversionController'
      });
    }])
        .controller('ConversionController', [function () {
            var vm = this;
            console.log("Should be fucking here");
            vm.currencies = [{'id': 1, 'code': 'NZD', 'name': 'New Zealand Dollar'},
                {'id': 2, 'code': 'AUD', 'name': 'Australian Dollar'},
                {'id': 3, 'code': 'USD', 'name': 'United States Dollar'},
                {'id': 4, 'code': 'GBP', 'name': 'British Pound'},
                {'id': 5, 'code': 'JPY', 'name': 'Japanese Yen'},
                {'id': 6, 'code': 'EUR', 'name': 'Euro'}];
            vm.formData = {};
            vm.formData.source = '';
            vm.formData.target = '';
            vm.formData.baseAmount = 0.00;
            vm.formData.convertedAmount = 0.00;
            vm.sourceRate = 1;
            vm.targetRate = 1;
        }]);

   /* ConversionController.$inject = ['conversionService'];

    function ConversionController(conversionService){
        var vm = this;
        vm.currencies = [{'id': 1, 'code': 'NZD', 'name': 'New Zealand Dollar'},
            {'id': 2, 'code': 'AUD', 'name': 'Australian Dollar'},
            {'id': 3, 'code': 'USD', 'name': 'United States Dollar'},
            {'id': 4, 'code': 'GBP', 'name': 'British Pound'},
            {'id': 5, 'code': 'JPY', 'name': 'Japanese Yen'},
            {'id': 6, 'code': 'EUR', 'name': 'Euro'}];
        vm.formData = {};
        vm.formData.source = '';
        vm.formData.target = '';
        vm.formData.baseAmount = 0.00;
        vm.formData.convertedAmount = 0.00;
        vm.sourceRate = 1;
        vm.targetRate = 1;

        vm.onConvert = function(){
            conversionService.getExchangeRate(vm.formData.source)
                .then(function(resp) {
                    vm.sourceRate = resp;
                    return conversionService.getExchangeRate(vm.formData.target);
                })
                .then(function(resp) {
                    vm.targetRate = resp;

                })
        }

    } */

})();