var peopleList = document.querySelector('#people-list');


var promise = $.ajax({
  url: 'http://swapi.co/api/people'
});


promise.done(function(data) {
  for (var i = 0; i < data.results.length; i++){
    var anLi = document.createElement('li');


    var name = document.createElement('h2');
    name.textContent = data.results[i].name;
    anLi.appendChild(name);

    var gender = document.createElement('div');
    gender.className = "gender";
    gender.textContent = 'gender : ' + data.results[i].gender;
    anLi.appendChild(gender);

    var hairColor = document.createElement('div');
    hairColor.className = 'hair-color';
    hairColor.textContent = 'hair color : ' + data.results[i].hair_color;
    anLi.appendChild(hairColor);

    peopleList.appendChild(anLi);
  }
});
