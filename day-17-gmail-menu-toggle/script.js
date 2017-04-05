


var theList = document.querySelector('ol');

theList.addEventListener('click', function(evt) {

  var previouslySelected = document.querySelector('.toggled');

  if (previouslySelected !== null) {
    previouslySelected.classList.remove('toggled');
  }

  if (evt.target.tagName === 'LI') {
    evt.target.classList.add('toggled');
  }

});
