var input = document.querySelector('#year-query');
var statsListOL = document.querySelector('#stats-list');

input.addEventListener('keyup', function(evt) {

  if (evt.keyCode !== 13) {
    return;
  }

  var value = input.value;

  $.ajax({
    url: '/api/halloffame'
  })

  .done(function(data) {
    console.log('data?', data);

    for (var i = 0; i < data.stats.length; i++) {

      if (data.stats[i].year !== value) {
        continue; // don't continue this loop if condition met, continue to the next loop
      }

      var li = document.createElement('li')
      li.textContent = data.stats[i].personID
      + '; year: ' + data.stats[i].year
      + '; votes: ' + data.stats[i].votes;

      statsListOL.appendChild(li);
    }

  });

});
