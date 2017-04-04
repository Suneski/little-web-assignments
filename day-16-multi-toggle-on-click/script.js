var names = document.querySelector('.names');
var kitties = ['Rocky', 'Henry', 'Tasuki', 'Kairi', 'Kefka'];

for (var i = 0; i < kitties.length; i++) {

  var newItem = document.createElement('li');

  newItem.textContent = kitties[i];

  names.appendChild(newItem);

  newItem.addEventListener('click', function(evt) {
    evt.target.classList.toggle('toggled');
  });

};


var theButton = document.querySelector('#add-thing');
var ol = document.querySelector('ol');

theButton.addEventListener('click', function() {
  var li = document.createElement('li');
  li.textContent = 'new';

  ol.appendChild(li);
});
