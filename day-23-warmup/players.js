var chalk = require('chalk');

var fs = require('fs');

fs.readFile('HallOfFame.csv', 'utf-8', function(err, data) {

  var lines = data.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var pieces = line.split(',');

    if (pieces[1] === '2016'  && pieces[5] > 200) {
      console.log(chalk.cyan.bold('Player ID ') + chalk.cyan(pieces[0]));
    }
  }

});
