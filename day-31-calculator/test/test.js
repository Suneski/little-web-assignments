var assert = require('assert');

var Calculator = {
  add: function(input) {
    if(input.indexOf(',') > -1) {
      var units = input.split(',');
      var sum = 0;
      units.forEach(function(x) {
        sum += Number(x);
      });
      return sum;
    }
    return Number(input);
  }
}

describe('String Calculator add method', function() {
  it('should return 0 when the value is a blank string', function() {
    var result = Calculator.add('');

    assert.equal(0, result);
  });

  it('should return 3 when the value is 3', function() {
    var result = Calculator.add('3');

    assert.equal(3, result);
  });

  it('should return 5 when the value is "2,3"', function() {
    var result = Calculator.add('2,3');

    assert.equal(5, result);
  });

  it('should return 10 when the value passed in is "5,5"', function() {
    var result = Calculator.add('5,5');

    assert.equal(10, result);
  })

});
