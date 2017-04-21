var button = document.querySelector('button');
var details = document.querySelector('#details');
var template = document.querySelector('#template').innerHTML;
var input = document.querySelector('input');

var ajaxData;

$.ajax({
  url: 'https://api.icndb.com/jokes/'
})

.done(function(data) {
  ajaxData = data;
});

button.addEventListener('click', function() {
  var randomNumber = Math.floor(Math.random() * ajaxData.value.length);

  var html = Mustache.render(template, ajaxData.value[randomNumber]);

  if (ajaxData.value[randomNumber].joke.indexOf('&quot;') > -1) {
    html = html.replace("&quot;", "\"");
  }




  if (input.value !== '') {

    html = html.replace(/Chuck Norris/g, input.value);

  }

  details.innerHTML = html;
});
