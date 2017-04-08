var red = document.querySelector('#red');

// var positionX = -2450;
// var positionY = 0;
//
// window.addEventListener('keydown', function(evt) {
//   console.log(evt.keyCode);
// });
//
// function animate() {
//   positionX = -390;
//   positionY = -420;
//
//   red.style.backgroundPositionX = positionX + 'px';
//   red.style.backgroundPositionY = positionY + 'px';
// }
//
//
// var intervalId = setInterval(animate, 50);

var red = document.querySelector('#red');
var stopButton = document.querySelector('#stop-button');
var startButton = document.querySelector('#start-button');

var positionX = -10;
var positionY = 0;
// var direction = 'left';

window.addEventListener('keydown', function(evt) {
  console.log(evt.keyCode);

  if (evt.keyCode === 37) {
    // direction = 'left';
    // positionY = -650;
  }
  else if (evt.keyCode === 39) {
    // direction = 'right';
    // positionY = -910;
  }
  else if (evt.keyCode === 38) {
    // direction = 'up';
    // positionY = -780;
  }
  else if (evt.keyCode === 40) {
    // direction = 'down';
    // positionY = -520;
  }
});

// stopButton.addEventListener('click', function() {
//   console.log('stop', intervalId);
//   clearInterval(intervalId);
// });
//
// startButton.addEventListener('click', function() {
//   console.log('start', intervalId);
//   intervalId = setInterval(animate, 50);
// });



function animate() {
  positionX -= 160;
  positionY -= 0;
  red.style.backgroundPositionX = positionX + 'px';
  red.style.backgroundPositionY = positionY + 'px';
}


var intervalId = setInterval(animate, 70);
