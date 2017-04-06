var link = document.querySelector('#link');
var stopButton = document.querySelector('#stop-button');
var startButton = document.querySelector('#start-button');

var positionX = 0;
var positionY = -650;
var direction = 'left';

window.addEventListener('keydown', function(evt) {
  console.log(evt.keyCode);

  if (evt.keyCode === 37) {
    direction = 'left';
    positionY = -650;
  }
  else if (evt.keyCode === 39) {
    direction = 'right';
    positionY = -910;
  }
  else if (evt.keyCode === 38) {
    direction = 'up';
    positionY = -780;
  }
  else if (evt.keyCode === 40) {
    direction = 'down';
    positionY = -520;
  }
});

startButton.addEventListener('click', function() {
  console.log('start', intervalId);
  intervalId = setInterval(animate, 50);
});

stopButton.addEventListener('click', function() {
  console.log('stop', intervalId);
  clearInterval(intervalId);
});

function animate() {
  positionX -= 120;
  link.style.backgroundPositionX = positionX + 'px';
  link.style.backgroundPositionY = positionY + 'px';
}


var intervalId = setInterval(animate, 50);
