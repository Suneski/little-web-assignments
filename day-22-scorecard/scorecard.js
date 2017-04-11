var fs = require('fs');

fs.readFile('Most-Recent-Cohorts-Scorecard-Elements.csv', 'utf-8', function(err, data) {
  // console.log('async error', err)
  // console.log('async data', data);

  var lines = data.split('\n');
  // console.log('lines', lines);

  for (var i = 1; i < lines.length - 1; i++) {
    var line = lines[i];
    var pieces = line.split(',');
    console.log('name -', pieces[3]);
  }

});
