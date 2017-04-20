var h1 = document.querySelector('h1');
var selectedImage = document.querySelector('.selected-image');
var imageList = document.querySelector('.image-list');
var template = document.querySelector('#list-template').innerHTML;
var row = document.querySelector('.row');
var thumbnailImage = document.querySelector('.thumbnail-image');
var detailsDiv = document.querySelector('#details');
var detailsTemplate = document.querySelector('#detail-template').innerHTML;

var ajaxData;

$.ajax({
  url: '/api/pics'
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

  var index = evt.target.getAttribute('data-index');
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
