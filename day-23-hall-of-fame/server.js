var express = require('express');
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
    sodas: ['ramune', 'root beer', 'Dr. Pepper', 'grape soda', 'that orange one']
  }

  res.send(output);

});





app.listen(7690, function() {
  console.log('Listening at port 7690.');
});
