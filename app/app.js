'use strict';

// Declare app level module which depends on views, and components
angular.module('converterApp', [
  'ngRoute',
  'converterApp.view1',
  'converterApp.view2',
  'converterApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
