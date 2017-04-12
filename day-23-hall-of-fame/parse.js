var fs = require('fs');

fs.readFile('HallOfFame.csv', 'utf-8', function(err, data) {

  var lines = data.split('\n');

  var output = [];

  for (var i = 0; i < lines.length; i++) {
    var values = lines[i].split(',');

    var person = values[0];
    var year = values[1];
    var votes =values[5];

    output.push({
      personID: person,
      year: year,
      votes: votes
    });


  }


  console.log(output);

});
