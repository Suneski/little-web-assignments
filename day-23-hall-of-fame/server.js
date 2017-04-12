var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'));

app.get('/api/favoritefoods', function(req, res) {

  console.log('Calling favorite foods api');

  var output = {
    foods: ['takoyaki', 'ramen', 'seaweed', 'burgers', 'steak']
  };

  res.send(output);
});



app.get('/api/favoritesodas', function(req,res) {

  console.log('Calling sodas api');

  var output = {
    sodas: [
      {
        soda: 'ramune',
        image: 'images/ramune.jpg'
      },
      {
        soda: 'root beer',
        image: 'images/rootbeer.jpg'
      },
      {
        soda: 'Dr. Pepper',
        image: 'images/drpepper.jpeg'
      },
      {
        soda: 'grape soda',
        image: 'images/grapesoda.jpg'
      },
      {
        soda: 'that orange one',
        image: 'images/orangesoda.jpeg'
      }
    ]
  }

  res.send(output);

});



app.get('/api/halloffame', function(req,res) {

  console.log('Calling hall of fame api');

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

    res.send({
      stats: output
    });
  });
});





app.listen(7690, function() {
  console.log('Listening at port 7690.');
});
