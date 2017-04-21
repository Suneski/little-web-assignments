var planetsList = document.querySelector('#planets-list');
var template = document.querySelector('#list-template').innerHTML;


var promise = $.ajax({
  url: 'https://swapi.co/api/planets'
});


promise.done(function(data) {

  // planetsList.innerHTML = '';

  var totalHtml = '';

  for (var i = 0; i < data.results.length; i++){

    var html = Mustache.render(template, {
      name: data.results[i].name,
      population: data.results[i].population,
      climate: data.results[i].climate,
      terrain: data.results[i].terrain,
      orbitalPeriod: data.results[i].orbital_period,
      diameter: data.results[i].diameter,
      gravity: data.results[i].gravity
    });

    totalHtml += html;



    // var anLi = document.createElement('li');
    //
    //
    // var name = document.createElement('h2');
    // name.textContent = data.results[i].name;
    // name.classList.add("planet-name");
    // anLi.appendChild(name);
    //
    // var population = document.createElement('div');
    // population.textContent = 'Population : ' + data.results[i].population;
    // population.classList.add("population");
    // anLi.appendChild(population);
    //
    // var climate = document.createElement('div');
    // climate.textContent = 'Climate : ' + data.results[i].climate;
    // climate.classList.add("climate");
    // anLi.appendChild(climate);
    //
    // var terrain = document.createElement('div');
    // terrain.textContent = 'Terrain : ' + data.results[i].terrain;
    // terrain.classList.add("terrain");
    // anLi.appendChild(terrain);
    //
    // var orbitalPeriod = document.createElement('div');
    // orbitalPeriod.textContent = 'Orbital Period : ' + data.results[i].orbital_period + ' days';
    // orbitalPeriod.classList.add("orbital-period");
    // anLi.appendChild(orbitalPeriod);
    //
    // var diameter = document.createElement('div');
    // diameter.textContent = 'Diameter : ' + data.results[i].diameter + 'km';
    // diameter.classList.add("diameter");
    // anLi.appendChild(diameter);
    //
    // var gravity = document.createElement('div');
    // gravity.textContent = 'Gravity : ' + data.results[i].gravity;
    // gravity.classList.add("gravity");
    // anLi.appendChild(gravity);
    //
    // planetsList.appendChild(anLi);
  }

  planetsList.innerHTML = totalHtml;
});
