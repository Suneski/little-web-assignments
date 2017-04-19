var button = document.querySelector('button');
var details = document.querySelector('#details');
var template = document.querySelector('#template').innerHTML;
var input = document.querySelector('input');

var randomNumber;


var ajaxData;


$.ajax({
  url: 'http://api.icndb.com/jokes/'
})

.done(function(data) {
  ajaxData = data;

  var totalHtml = '';

  for (var i = 0; i < data.value.length; i++) {
    var html = Mustache.render(template, {
      joke: data.value[i].joke
    });
  }

  totalHtml += html;
});

button.addEventListener('click', function() {
  randomNumber = Math.floor(Math.random() * ajaxData.value.length);



  var html = Mustache.render(template, ajaxData.value[randomNumber]);

  if (input.value !== '') {
    var name = input.value;

    var bootChuck = html.replace("Chuck Norris", name);

    html = bootChuck;
  }

  details.innerHTML = html;
});
