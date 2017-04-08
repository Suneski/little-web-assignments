var previousButton = document.querySelector('#previous-button');
var nextButton = document.querySelector('#next-button');
var playButton = document.querySelector('#play-button');
var stopButton = document.querySelector('#stop-button');

stopButton.style.display = 'none';

var currentImageIndex = 0;
var currentTextIndex = 0;

var imageArray = [
  {
    image: 'images/sweeping.png',
    text: 'At the Mansion'
  },
  {
    image: 'images/cherry-blossom-rem.png',
    text: 'Under the Cherry Blossoms'
  },
  {
    image: 'images/demon-mode.jpg',
    text: 'Psycho Demon Maid'
  },
  {
    image: 'images/destroying.jpg',
    text: 'Seek & Destroy'
  },
  {
    image: 'images/huh.jpg',
    text: 'Dazed'
  },
  {
    image: 'images/no-touch.png',
    text: 'Guardian Mode'
  },
  {
    image: 'images/pissed.png',
    text: 'Armed with Morningstar'
  },
  {
    image: 'images/red-eye.jpg',
    text: 'Rage Boiling'
  },
  {
    image: 'images/smile.jpg',
    text: 'All is Well'
  }
];

var display = document.querySelector('#display').src=imageArray[0].image;

var text = document.querySelector('#text');
text.textContent = imageArray[0].text;



playButton.addEventListener('click', function() {
  function animate() {
    if (currentImageIndex < imageArray.length) {
      currentImageIndex += 1;
    }
    if (currentImageIndex === imageArray.length - 1) {
      currentImageIndex = 0;
    }

    display = document.querySelector('#display').src=imageArray[currentImageIndex].image;
    text.textContent = imageArray[currentImageIndex].text;
  }
  intervalId = setInterval(animate, 1000);

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

  display = document.querySelector('#display').src=imageArray[currentImageIndex].image;
  text.textContent = imageArray[currentImageIndex].text;

  clearInterval(intervalId);
  playButton.style.display = 'inline-block';
  stopButton.style.display = 'none';
});

previousButton.addEventListener('click', function() {
  currentImageIndex -= 1;

  if (currentImageIndex < 0) {
    currentImageIndex = imageArray.length - 1;
  }

  display = document.querySelector('#display').src=imageArray[currentImageIndex].image;
  text.textContent = imageArray[currentImageIndex].text;

  clearInterval(intervalId);
  playButton.style.display = 'inline-block';
  stopButton.style.display = 'none';
});
