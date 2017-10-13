(function() {
    'use strict';

    angular.module('converterApp.conversion', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/conversion', {
        templateUrl: 'conversion/conversion.html',
        controller: 'ConversionCtrl',
        controllerAs: 'vm'
      });
    }])

    .controller('ConversionCtrl', ['$http', function($http) {
        var vm = this;
        vm.currencies = [{'id': 1, 'code': 'NZD', 'name': 'New Zealand Dollar'},
                         {'id': 2, 'code': 'AUD', 'name': 'Australian Dollar'},
                         {'id': 3, 'code': 'USD', 'name': 'United States Dollar'},
                         {'id': 4, 'code': 'GBP', 'name': 'British Pound'},
                         {'id': 5, 'code': 'JPY', 'name': 'Japanese Yen'},
                         {'id': 6, 'code': 'EUR', 'name': 'Euro'}];
        vm.formData = {};

        vm.onConvert = function(){

        }
    }]);

})();