'use strict';

// Declare app level module which depends on views, and components
angular.module('converterApp', [
  'ngRoute',
  'converterApp.conversion',
  'converterApp.history',
  'converterApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/conversion'});
}]);
