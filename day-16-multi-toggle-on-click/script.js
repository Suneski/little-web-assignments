var names = document.querySelector('.names');
var kitties = ['Rocky', 'Henry', 'Tasuki', 'Kairi', 'Kefka'];

for (var i = 0; i < kitties.length; i++) {

  var newItem = document.createElement('li');

  newItem.textContent = kitties[i];

  names.appendChild(newItem);

};



names.addEventListener('click', function() {
  newItem.classList.toggle('toggled');
});
