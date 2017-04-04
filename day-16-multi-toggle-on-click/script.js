var names = document.querySelector('.names');
var kitties = ['Rocky', 'Henry', 'Tasuki', 'Kairi', 'Kefka'];

for (var i = 0; i < kitties.length; i++) {
  var newItem = document.createElement('li');
  newItem.textContent = kitties[i];
  names.appendChild(newItem);
};

var theButton = document.querySelector('#add-thing');
var ol = document.querySelector('ol');

ol.addEventListener('click', function(evt) {
  // console.log(evt);
  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('toggled');
  }
});

theButton.addEventListener('click', function() {
  var li = document.createElement('li');
  li.textContent = '=^..^=';

  ol.appendChild(li);
});
