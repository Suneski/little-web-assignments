  var assert = require('assert');

var Calculator = {
  add: function(input) {
    if (input === '') {
      return 0;
    }


    if (input.indexOf(',') > -1 || input.indexOf('//') > -1) {
      var array = input.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n\s/\\]+/);
      var sum = 0;

      array.forEach(function(x) {
        sum += Number(x);
      });

      return sum;
    }

    if (input.indexOf('-') > -1) {
      return "negatives not allowed " + input;
    }
    return Number(input);
  }
}

describe('String Calculator add method', function() {
  it('should return 0 if the value is a blank string', function(){
    var result = Calculator.add('');

    assert.equal(0, result);
  })

  it('should return 7 if the value is 7', function() {
    var result = Calculator.add('7');

    assert.equal(7, result);
  })
  it('should return 5 if the value is "2,3"', function(){
    var result = Calculator.add('2,3');

    assert.equal(5, result);
  })
  it('should return 12 if the value is "6,4,2"', function(){
    var result = Calculator.add('6,4,2');

    assert.equal(12, result);
  })

  it('should return 6 if the value is “1\n2,3”', function() {
    var result = Calculator.add("1\n2,3");

    assert.equal(6, result);
  })

  it('should return 3 if the value is “//;\n1;2”', function() {
    var result = Calculator.add("//;\n1;2");

    assert.equal(3, result);
  })

  it('should return negatives not allowed -3 if the value is “-3”', function() {
    var result = Calculator.add("-3");

    assert.equal("negatives not allowed ", -3, result);
  })

  // it('should return negatives not allowed -3, -5 if the value is “-3, -5”', function() {
  //   var result = Calculator.add("-3");
  //
  //   assert.equal("negatives not allowed", -3, -5, result);
  // })
});





































// var assert = require('assert');
//
// var Calculator = {
//   add: function(input) {
//     if(input.indexOf(',') > -1) {
//       var units = input.split(',');
//       var sum = 0;
//       units.forEach(function(x) {
//         sum += Number(x);
//       });
//       return sum;
//     }
//     return Number(input);
//   }
// }
//
// describe('String Calculator add method', function() {
//   it('should return 0 when the value is a blank string', function() {
//     var result = Calculator.add('');
//
//     assert.equal(0, result);
//   });
//
//   it('should return 3 when the value is 3', function() {
//     var result = Calculator.add('3');
//
//     assert.equal(3, result);
//   });
//
//   it('should return 5 when the value is "2,3"', function() {
//     var result = Calculator.add('2,3');
//
//     assert.equal(5, result);
//   });
//
//   it('should return 10 when the value passed in is "5,5"', function() {
//     var result = Calculator.add('5,5');
//
//     assert.equal(10, result);
//   })
//
// });
