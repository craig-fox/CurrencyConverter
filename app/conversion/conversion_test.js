'use strict';

describe('converterApp.conversion module', function() {

  beforeEach(module('converterApp.conversion'));

  describe('ConversionController', function(){

    it('should be defined', inject(function($controller) {
      var conversionController = $controller('ConversionController');
      expect(conversionController).toBeDefined();
    }));

  });
});