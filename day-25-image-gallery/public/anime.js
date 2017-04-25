var h1 = document.querySelector('h1');
var selectedImage = document.querySelector('.selected-image');
var imageList = document.querySelector('.image-list');
var template = document.querySelector('#list-template').innerHTML;
var row = document.querySelector('.row');
var thumbnailImage = document.querySelector('.thumbnail-image');
var detailsDiv = document.querySelector('#details');
var detailsTemplate = document.querySelector('#detail-template').innerHTML;

var previous = document.querySelector('.previous');
var next = document.querySelector('.next');

var ajaxData;

$.ajax({
  url: '/api/animepics'
})

.done(function(data) {

  ajaxData = data;

  var html = '';

  for (var i = 0; i < data.pictures.length; i++) {

    html += Mustache.render(template, {
      index: i,
      imgThumbSrc: data.pictures[i].thumbnail,
      fullSize: data.pictures[i].fullSize,
      description: data.pictures[i].description
    });

  }

  imageList.innerHTML = html;

});


imageList.addEventListener('click', function(evt) {
  h1.style.display = 'none';

  var index = Number(evt.target.getAttribute('data-index'));
  // console.log(ajaxData.pictures[index]);

  var html = Mustache.render(detailsTemplate, ajaxData.pictures[index]);
  // console.log(html);

  var previouslySelected = document.querySelector('.toggled');

  if (previouslySelected !== null) {
    previouslySelected.classList.remove('toggled');
  }

  if (evt.target.tagName === 'IMG') {
    evt.target.classList.add('toggled');
  }

  detailsDiv.innerHTML = html;
});





var innerFrame = document.querySelector('.inner-frame');
var left = 0;

previous.addEventListener('click', function() {
  if (left === -600) {
    left = 0;
    previous.style.opacity = "0.3";
  }
  if (left < 0) {
    next.style.opacity = "1.0";
    left += 600;
  }

imageList.style.left = left + 'px';

});

next.addEventListener('click', function() {
  if (left > -1200) {
    previous.style.opacity = "1.0";
    left -= 600;
  }
  if (left === -1200) {
    left = -1200;
    next.style.opacity = "0.3";
  }

imageList.style.left = left + 'px';

});
