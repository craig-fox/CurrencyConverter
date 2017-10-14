'use strict';

angular.module('converterApp.version', [
  'converterApp.version.interpolate-filter',
  'converterApp.version.version-directive'
])

.value('version', '0.1')
.constant('CURRENCIES', [{'id': 1, 'code': 'NZD', 'name': 'New Zealand Dollar'},
    {'id': 2, 'code': 'AUD', 'name': 'Australian Dollar'},
    {'id': 3, 'code': 'USD', 'name': 'United States Dollar'},
    {'id': 4, 'code': 'GBP', 'name': 'British Pound'},
    {'id': 5, 'code': 'JPY', 'name': 'Japanese Yen'},
    {'id': 6, 'code': 'EUR', 'name': 'Euro'}])
