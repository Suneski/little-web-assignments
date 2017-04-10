var peopleList = document.querySelector('#people-list');


var promise = $.ajax({
  url: 'http://swapi.co/api/people'
});


promise.done(function(data) {
  for (var i = 0; i < data.results.length; i++){
    var anLi = document.createElement('li');

    // var div = document.createElement('div');
    // div.classList.add("li-div");


    var name = document.createElement('h2');
    name.textContent = data.results[i].name;
    name.classList.add("character-name");
    anLi.appendChild(name);

    var gender = document.createElement('div');
    gender.className = "gender";
    gender.textContent = 'Gender : ' + data.results[i].gender;
    name.classList.add("character-gender");
    anLi.appendChild(gender);

    var birthYear = document.createElement('div');
    birthYear.className = 'birth-year';
    birthYear.textContent = 'Birth Year : ' + data.results[i].birth_year;
    birthYear.classList.add("birthYear");
    anLi.appendChild(birthYear);

    peopleList.appendChild(anLi);
  }
});
