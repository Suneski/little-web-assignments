var ol = document.querySelector('ol');
var li = document.querySelector('li');


ol.addEventListener('click', function(evt) {
  // console.log(evt);
  if (evt.target.tagName === 'LI') {
    li.classList.remove('toggled');
    evt.target.classList.add('toggled');
  }
});
