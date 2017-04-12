// var sodaList = document.querySelector('ul');
//
// var promise = $.ajax({
//   url: '/api/favoritesodas'
// });
//
// promise.done(function(data) {
//   for (var i = 0; i < data.sodas.length; i++){
//     var li = document.createElement('li');
//
//     var soda = document.createElement('p');
//     soda.textContent = data.sodas[i];
//     li.appendChild(soda);
//
//
//     sodaList.appendChild(li);
//   }
// });

var sodaList = document.querySelector('#soda-list');

var promise = $.ajax({});

$.ajax({
  url: '/api/favoritesodas'
})

.done(function(data) {
  for (var i = 0; i < data.sodas.length; i++){
    var li = document.createElement('li');

    var soda = document.createElement('p');
    soda.textContent = data.sodas[i];
    li.appendChild(soda);


    sodaList.appendChild(li);
  }
});
