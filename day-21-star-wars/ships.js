var shipList = document.querySelector('#ship-list');


var promise = $.ajax({
  url: 'http://swapi.co/api/starships'
});


promise.done(function(data) {
  for (var i = 0; i < data.results.length; i++){
    var anLi = document.createElement('li');


    var shipName = document.createElement('h2');
    shipName.textContent = data.results[i].model;
    shipName.classList.add("ship-name");
    anLi.appendChild(shipName);

    var model = document.createElement('div');
    model.textContent = 'Model : ' + data.results[i].model;
    model.classList.add("model");
    anLi.appendChild(model);

    var manufacturer = document.createElement('div');
    manufacturer.textContent = 'Manufacturer : ' + data.results[i].manufacturer;
    manufacturer.classList.add("manufacturer");
    anLi.appendChild(manufacturer);

    var cost = document.createElement('div');
    cost.textContent = 'Cost : ' + data.results[i].cost_in_credits + ' credits';
    cost.classList.add("cost");
    anLi.appendChild(cost);



    shipList.appendChild(anLi);
  }
});
