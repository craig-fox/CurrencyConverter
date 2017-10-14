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
        .controller('ConversionController', ['conversionService', 'CURRENCIES', function (conversionService, CURRENCIES) {
            var vm = this;
            vm.currencies = CURRENCIES;
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