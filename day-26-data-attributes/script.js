var clickMe = document.querySelector('#click-me');
var template = document.querySelector('#list-template').innerHTML;
var swapiPeopleOL = document.querySelector('#swapi-people');
var detailsDiv = document.querySelector('#details');
var detailTemplate = document.querySelector('#detail-template').innerHTML;
var spinner = document.querySelector('#spinner');

clickMe.addEventListener('click', function(evt){
  var index = clickMe.getAttribute('data-id');
  console.log(index);
})

var ajaxData;

$.ajax ({
  url: 'http://swapi.co/api/people'
})



.done(function(data) {

  ajaxData = data;

  var totalHtml = '';

  for (var i = 0; i < data.results.length; i++) {

    // Regular DOM Manipulation
    // var li = document.createElement('li');
    // li.setAttribute('data-index', i);
    // li.textContent = data.results[i].name;
    //
    // swapiPeopleOL.appendChild(li);

    var html = Mustache.render(template, {
      name: data.results[i].name,
      index: i
    });


    totalHtml += html;
  }

  spinner.style.display = 'none';

  swapiPeopleOL.innerHTML = totalHtml;

});



swapiPeopleOL.addEventListener('click', function(evt){

  if (evt.target.tagName === 'LI') {
    // detailsDiv.textContent = evt.target.getAttribute('data-index');


    var index = Number(evt.target.getAttribute('data-index'));

    var person = ajaxData.results[index];
    console.log('person', person)




    var html = Mustache.render(detailTemplate, {
      name: ajaxData.results[index].name,
      birth_year: ajaxData.results[index].birth_year,
      eye_color: ajaxData.results[index].eye_color
    });

  }


  detailsDiv.innerHTML = html;
})
