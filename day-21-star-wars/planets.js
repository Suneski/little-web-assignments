var planetsList = document.querySelector('#planets-list');


var promise = $.ajax({
  url: 'http://swapi.co/api/planets'
});


promise.done(function(data) {
  for (var i = 0; i < data.results.length; i++){
    var anLi = document.createElement('li');


    var name = document.createElement('h2');
    name.textContent = data.results[i].name;
    name.classList.add("planet-name");
    anLi.appendChild(name);

    var population = document.createElement('div');
    population.textContent = 'Population : ' + data.results[i].population;
    population.classList.add("population");
    anLi.appendChild(population);

    var climate = document.createElement('div');
    climate.textContent = 'Climate : ' + data.results[i].climate;
    climate.classList.add("climate");
    anLi.appendChild(climate);

    var terrain = document.createElement('div');
    terrain.textContent = 'Terrain : ' + data.results[i].terrain;
    terrain.classList.add("terrain");
    anLi.appendChild(terrain);

    planetsList.appendChild(anLi);
  }
});
