'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /conversion when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/conversion");
  });


  describe('conversion', function() {

    beforeEach(function() {
      browser.get('index.html#!/conversion');
    });


    it('should render conversion when user navigates to /conversion', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('history', function() {

    beforeEach(function() {
      browser.get('index.html#!/history');
    });


    it('should render history when user navigates to /history', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
