var shipList = document.querySelector('#ship-list');
var template = document.querySelector('#list-template').innerHTML;


var promise = $.ajax({
  url: 'http://swapi.co/api/starships'
});


promise.done(function(data) {

  // shipList.innerHTML = '';

  var totalHtml = '';

  for (var i = 0; i < data.results.length; i++){

    var html = Mustache.render(template, {
      shipName: data.results[i].name,
      model: data.results[i].model,
      starshipClass: data.results[i].starship_class,
      manufacturer: data.results[i].manufacturer,
      cost: data.results[i].cost_in_credits,
      length: data.results[i].length,
      speed: data.results[i].max_atmosphering_speed,
      crew: data.results[i].crew,
      passengers: data.results[i].passengers,
      hyperdrive: data.results[i].hyperdrive_rating
    });

    totalHtml += html;

    // var anLi = document.createElement('li');
    //
    //
    // var shipName = document.createElement('h2');
    // shipName.textContent = data.results[i].name;
    // shipName.classList.add("ship-name");
    // anLi.appendChild(shipName);
    //
    // var model = document.createElement('div');
    // model.textContent = 'Model : ' + data.results[i].model;
    // model.classList.add("model");
    // anLi.appendChild(model);
    //
    // var starshipClass = document.createElement('div');
    // starshipClass.textContent = 'Starship Class : ' + data.results[i].starship_class;
    // starshipClass.classList.add("starshipClass");
    // anLi.appendChild(starshipClass);
    //
    // var manufacturer = document.createElement('div');
    // manufacturer.textContent = 'Manufacturer : ' + data.results[i].manufacturer;
    // manufacturer.classList.add("manufacturer");
    // anLi.appendChild(manufacturer);
    //
    // var cost = document.createElement('div');
    // cost.textContent = 'Cost : ' + data.results[i].cost_in_credits + ' credits';
    // cost.classList.add("cost");
    // anLi.appendChild(cost);
    //
    // var length = document.createElement('div');
    // length.textContent = 'Length : ' + data.results[i].length + 'm';
    // length.classList.add("length");
    // anLi.appendChild(length);
    //
    // var speed = document.createElement('div');
    // speed.textContent = 'Max Atmosphering Speed (kph): ' + data.results[i].max_atmosphering_speed;
    // speed.classList.add("speed");
    // anLi.appendChild(speed);
    //
    // var crew = document.createElement('div');
    // crew.textContent = 'Crew : ' + data.results[i].crew;
    // crew.classList.add("crew");
    // anLi.appendChild(crew);
    //
    // var passengers = document.createElement('div');
    // passengers.textContent = 'Passengers : ' + data.results[i].passengers;
    // passengers.classList.add("passengers");
    // anLi.appendChild(passengers);
    //
    // var hyperdrive = document.createElement('div');
    // hyperdrive.textContent = 'Hyperdrive Rating : ' + data.results[i].hyperdrive_rating;
    // hyperdrive.classList.add("hyperdrive");
    // anLi.appendChild(hyperdrive);
    //
    //
    //
    // shipList.appendChild(anLi);
  }

  shipList.innerHTML = totalHtml;
});
