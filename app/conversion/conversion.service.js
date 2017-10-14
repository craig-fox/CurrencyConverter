(function() {
    'use strict';

    angular
        .module('converterApp.conversion')
        .factory('conversionService', conversionService);

    conversionService.$inject = ['$http'];

    function conversionService($http) {
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
    }
})();