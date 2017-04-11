var fs = require('fs');

// THIS IS THE SYNCHRONOUS EXAMPLE

var fileData = fs.readFileSync('authors.csv', 'utf-8');
var lines = fileData.split('\n');

// console.log(lines);

for (var i = 1; i < lines.length - 1; i++) {
  var line = lines[i];
  var pieces = line.split(',');
  console.log('name -', pieces[0]);
}

console.log('------------------------------------------------------------------')

// THIS IS THE ASYNCHRONOUS EXAMPLE

fs.readFile('authors.csv', 'utf-8', function(err, data) {
  console.log('async error', err)
  console.log('async data', data);

  var lines = data.split('\n');
  console.log('lines', lines);

  for (var i = 1; i < lines.length - 1; i++) {
    var line = lines[i];
    var pieces = line.split(',');
    console.log('name -', pieces[0]);
  }

});
