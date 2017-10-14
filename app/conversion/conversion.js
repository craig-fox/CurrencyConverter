(function() {
    'use strict';

    angular.module('converterApp.conversion', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/conversion', {
        templateUrl: 'conversion/conversion.html',
        controller: 'ConversionController',
        controllerAs: 'vm'
      });
    }]).service('conversionService', ['$http', function ($http) {

        function getResponse(response) {
            return response.data;
        }

        function getExchangeRate(currency) {
            return $http.get("http://api.fixer.io/latest?base=" + currency)
                .then(getResponse);
        }

        return {
            getExchangeRate: getExchangeRate
        }

    }])
        .controller('ConversionController', ['conversionService', function (conversionService) {
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

            vm.onConvert = function(){
                if(!vm.formData.baseAmount || vm.formData.source === '' || vm.formData.target === ''){
                    console.log("Must select currency types and base amount");
                    return;
                }

                conversionService.getExchangeRate(vm.formData.source)
                    .then(function(resp) {
                        var rate = resp.rates[vm.formData.target];
                        vm.formData.convertedAmount = vm.formData.baseAmount * rate;
                    })

            }
        }]);

})();