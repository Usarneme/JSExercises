var Year = require('./leap');

describe('Leap year', function() {

  it('is not very common YEAR 2015 f', function() {
    var year = new Year(2015);
    expect( year.isLeap(year) ).toBe(false);
  });

  it('is introduced every 4 years to adjust about a day YEAR 2016 t', function() {
    var year = new Year(2016);
    expect( year.isLeap(year) ).toBe(true);
  });

  it('is skipped every 100 years to remove an extra day YEAR 1900 f', function() {
    var year = new Year(1900);
    expect( year.isLeap(year) ).toBe(false);
  });

  it('is reintroduced every 400 years to adjust another day YEAR 2000 t', function() {
    var year = new Year(2000);
    expect( year.isLeap(year) ).toBe(true);
  });

  // Feel free to enable the following tests to check some more examples
  describe('Additional example of a leap year that', function () {

    it('is not a leap year YEAR 1978 f', function () {
      var year = new Year(1978);
      expect(year.isLeap()).toBe(false);
    });

    it('is a common leap year YEAR 1992 t', function () {
      var year = new Year(1992);
      expect(year.isLeap()).toBe(true);
    });

    it('is skipped every 100 years YEAR 2100 f', function () {
      var year = new Year(2100);
      expect(year.isLeap()).toBe(false);
    });

    it('is reintroduced every 400 years YEAR 2400 t', function () {
      var year = new Year(2400);
      expect(year.isLeap()).toBe(true);
    });

  });

 });
