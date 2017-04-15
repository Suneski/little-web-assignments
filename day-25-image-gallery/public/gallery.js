var h1 = document.querySelector('h1');
var selectedImage = document.querySelector('.selected-image');
var imageList = document.querySelector('.image-list');
var template = document.querySelector('#list-template').innerHTML;
var row = document.querySelector('.row');
var thumbnailImage = document.querySelector('.thumbnail-image');

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
      imgThumbSrc: data.pictures[i].thumbnail
    });

  }

  imageList.innerHTML = html;

});


imageList.addEventListener('click', function(evt) {
  var index = Number(evt.target.getAttribute('data-index'));
  console.log(ajaxData.pictures[index]);
});
