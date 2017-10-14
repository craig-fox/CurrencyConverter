'use strict';

angular.module('converterApp.history', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/history', {
    templateUrl: 'history/history.html',
    controller: 'HistoryController',
    controllerAs: 'vm'
  });
}]).service('historyService', ['$http', function ($http) {

    function getResponse(response) {
        return response.data;
    }

    function getRatesForDate(date) {
        return $http.get("http://api.fixer.io/" + date)
            .then(getResponse);
    }

    return {
        getRatesForDate: getRatesForDate
    }

}])

.controller('HistoryController', ['$q', 'historyService', 'CURRENCIES', function($q, historyService, CURRENCIES) {
    var vm = this;
    vm.selected = '';
    vm.currencies = CURRENCIES;
    vm.dates = [];
    vm.results = [];

    function zero_pad(n) {
        return String("0" + n).slice(-2);
    }

    for(var i=1; i <= 5; i++){
        var d = new Date();
        d.setDate(d.getDate() - i);
        var formatDate = d.getFullYear()+'-' + zero_pad((d.getMonth()+1)) + '-'+ zero_pad(d.getDate());
        vm.dates.push(formatDate);
    }

    vm.update = function(){
        vm.results = [];
        var promises = [];
        for(var i = 0; i < vm.dates.length; i++) {
            var promise = historyService.getRatesForDate(vm.dates[i]);
            promises.push(promise);
        }
        $q.all(promises).then(function(resp){
            for(var r=0; r<resp.length; r++){
                var result = {};
                result.date = resp[r].date;
                result.rate = resp[r].rates[vm.selected];
                vm.results.push(result);
            }
        });

    }

}]);