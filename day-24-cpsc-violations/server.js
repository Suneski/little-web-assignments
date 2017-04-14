var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'));

app.get('/api/cpscViolations', function(req, res) {

  fs.readFile('violation-data.csv', 'utf-8', function(err, data) {

    var lines = data.split('\n');

    var output = [];

    for (var i = 1; i < lines.length - 1; i++) {
      var values = lines[i].split(',');

      var date = values[0].replace('"', '').replace('"', '');
      var product = values[1].replace('"', '').replace('"', '');
      var violation = values[2].replace('"', '').replace('"', '');
      var firm = values[3].replace('"', '').replace('"', '');

      output.push({
        date: date,
        product: product,
        violation: violation,
        firm: firm
      });
    }

    res.send({
      values: output
    });

  });

});

app.listen(4321, function() {
  console.log('Listening on port 4321')
});
