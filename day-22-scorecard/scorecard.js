var chalk = require('chalk');

var fs = require('fs');

fs.readFile('Most-Recent-Cohorts-Scorecard-Elements.csv', 'utf-8', function(err, data) {

  var lines = data.split('\n');

  for (var i = 1; i < lines.length - 1; i++) {
    var line = lines[i];
    var pieces = line.split(',');

    if (i % 2 === 0) {
      console.log(chalk.cyan.bold(pieces[3]), '||', chalk.cyan('ACT cumulative score (75th percentile):', pieces[32]));
    }
    else {
      console.log(chalk.magenta.bold(pieces[3]), '||', chalk.magenta('ACT cumulative score (75th percentile):', pieces[32]));
    }

  }

});
