var peopleList = document.querySelector('#people-list');
var template = document.querySelector('#list-template').innerHTML;


var promise = $.ajax({
  url: 'http://swapi.co/api/people'
});


promise.done(function(data) {

  // peopleList.innerHTML = '';

  var totalHtml = '';


  for (var i = 0; i < data.results.length; i++){

    var html = Mustache.render(template, {
      name: data.results[i].name,
      gender: data.results[i].gender,
      birthYear: data.results[i].birth_year,
      height: data.results[i].height,
      mass: data.results[i].mass,
      skin: data.results[i].skin_color,
      eye: data.results[i].eye_color,
      hair: data.results[i].hair_color
    });

    totalHtml += html;


    // var anLi = document.createElement('li');
    //
    // var name = document.createElement('h2');
    // name.textContent = data.results[i].name;
    // name.classList.add("character-name");
    // anLi.appendChild(name);
    //
    // var gender = document.createElement('div');
    // gender.className = "gender";
    // gender.textContent = 'Gender : ' + data.results[i].gender;
    // name.classList.add("character-gender");
    // anLi.appendChild(gender);
    //
    // var birthYear = document.createElement('div');
    // birthYear.className = 'birth-year';
    // birthYear.textContent = 'Birth Year : ' + data.results[i].birth_year;
    // birthYear.classList.add("birthYear");
    // anLi.appendChild(birthYear);
    //
    // var height = document.createElement('div');
    // height.className = 'height';
    // height.textContent = 'Height : ' + data.results[i].height + ' cm';
    // height.classList.add("height");
    // anLi.appendChild(height);
    //
    // var mass = document.createElement('div');
    // mass.className = 'mass';
    // mass.textContent = 'Mass : ' + data.results[i].mass + ' kg';
    // mass.classList.add("mass");
    // anLi.appendChild(mass);
    //
    // var skin = document.createElement('div');
    // skin.className = 'skin';
    // skin.textContent = 'Skin Color : ' + data.results[i].skin_color;
    // skin.classList.add("skin");
    // anLi.appendChild(skin);
    //
    // var eye = document.createElement('div');
    // eye.className = 'eye';
    // eye.textContent = 'Eye Color : ' + data.results[i].eye_color;
    // eye.classList.add("eye");
    // anLi.appendChild(eye);
    //
    // var hair = document.createElement('div');
    // hair.className = 'hair';
    // hair.textContent = 'Hair Color : ' + data.results[i].hair_color;
    // hair.classList.add("hair");
    // anLi.appendChild(hair);
    //
    // peopleList.appendChild(anLi);
  }

  peopleList.innerHTML = totalHtml;
});
