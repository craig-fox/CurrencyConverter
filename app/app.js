'use strict';

// Declare app level module which depends on views, and components
angular.module('converterApp', [
  'ngRoute',
  'ng-currency',
  'converterApp.conversion',
  'converterApp.history',
  'converterApp.version',
  'converterApp.currencies',
  'converterApp.inputcurrency'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/conversion'});
}]);
