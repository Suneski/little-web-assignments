var clickMe = document.querySelector('#click-me');
var template = document.querySelector('#list-template').innerHTML;
var swapiPeopleOL = document.querySelector('#swapi-people');

clickMe.addEventListener('click', function(evt){
  var index = clickMe.getAttribute('data-id');
  console.log(index);
})

$.ajax ({
  url: 'http://swapi.co/api/people'
})

.done(function(data) {

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

  swapiPeopleOL.innerHTML = totalHtml;
});
