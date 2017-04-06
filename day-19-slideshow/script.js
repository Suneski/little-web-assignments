var previousButton = document.querySelector('#previous-button');
var nextButton = document.querySelector('#next-button');
var playButton = document.querySelector('#play-button');
var stopButton = document.querySelector('#stop-button');

stopButton.style.display = 'none';

var currentImageIndex = 0;

var imageArray = [
  'images/sweeping.png',
  'images/cherry-blossom-rem.png',
  'images/demon-mode.jpg',
  'images/destroying.jpg',
  'images/huh.jpg',
  'images/no-touch.png',
  'images/pissed.png',
  'images/red-eye.jpg',
  'images/smile.jpg'
];

var display = document.querySelector('#display').src=imageArray[0];

playButton.addEventListener('click', function() {
  function animate() {
    currentImageIndex += 1;
    display = document.querySelector('#display').src=imageArray[currentImageIndex];

    if (currentImageIndex === imageArray.length - 1) {
      currentImageIndex = 0;
    }
  }
  intervalId = setInterval(animate, 500);

  playButton.style.display = 'none';
  stopButton.style.display = 'inline-block';
});

stopButton.addEventListener('click', function() {

  clearInterval(intervalId);

  playButton.style.display = 'inline-block';
  stopButton.style.display = 'none';
});

nextButton.addEventListener('click', function() {
  currentImageIndex += 1;

  if (currentImageIndex === imageArray.length) {
    currentImageIndex = 0;
  }

  display = document.querySelector('#display').src=imageArray[currentImageIndex];
});

previousButton.addEventListener('click', function() {
  currentImageIndex -= 1;

  if (currentImageIndex < 0) {
    currentImageIndex = imageArray.length - 1;
  }

  display = document.querySelector('#display').src=imageArray[currentImageIndex];
});
