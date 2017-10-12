'use strict';

angular.module('converterApp.version', [
  'converterApp.version.interpolate-filter',
  'converterApp.version.version-directive'
])

.value('version', '0.1');
