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
});

button.addEventListener('click', function() {
  randomNumber = Math.floor(Math.random() * ajaxData.value.length);



  var html = Mustache.render(template, ajaxData.value[randomNumber]);

  if (ajaxData.value[randomNumber].joke.indexOf("&quot;") > -1) {
    html.replace("&quot;", "\"");
  }


  if (input.value !== '') {
    var name = input.value;

    var bootChuck = html.replace(/Chuck Norris/g, name);

    html = bootChuck;
  }

  details.innerHTML = html;
});
