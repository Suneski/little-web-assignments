var ami = document.querySelector('#ami');

var stopButton = document.querySelector('#stop-button');
var startButton = document.querySelector('#start-button');

var positionX = -52;
var width = 50;

function animate() {

  //POSITION 2

  if (positionX <= -52) {
    width = 46;
    positionX -= 48;
    // ami.style.outline = 1 + 'px' + ' solid blue';
  }

  //POSITION 3

  if (positionX < -146) {
    width = 42;
    positionX -= 2;
    // ami.style.outline = 1 + 'px' + ' solid green';
  }

  //POSITION 4

  if (positionX < -150) {
    width = 32;
    positionX += 10;
    // ami.style.outline = 1 + 'px' + ' solid orange';
  }

  //POSITION 5

  if (positionX < -222) {
    width = 40;
    positionX += 10;
    // ami.style.outline = 1 + 'px' + ' solid purple';
  }

  //POSITION 6

  if (positionX < -230) {
    width = 42;
    positionX -= 10;
    // ami.style.outline = 1 + 'px' + ' solid black';
  }

  //POSITION 7

  if (positionX < -265) {
    width = 50;
    positionX -= 12;
    // ami.style.outline = 1 + 'px' + ' solid red';
  }

  //POSITION 8

  if (positionX < -315) {
    width = 50;
    positionX -= 2;
    // ami.style.outline = 1 + 'px' + ' solid green';
  }

  if (positionX < -367) {
    positionX = -52;
  }






  ami.style.width = width + 'px';

  ami.style.backgroundPositionX = positionX + 'px';
  ami.style.backgroundPositionY = positionY + 'px';


}


var intervalId = setInterval(animate, 200);
