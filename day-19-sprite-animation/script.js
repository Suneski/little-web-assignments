var ami = document.querySelector('#ami');

var punch = document.querySelector('#punch');
var upperCut = document.querySelector('#upper-cut');
var highKick = document.querySelector('#high-kick');
var lowKick = document.querySelector('#low-kick');

var positionX = -52;
var positionY = 0;
var width = 50;

function animate() {

  //POSITION 2

  if (positionX <= -52) {
    width = 46;
    positionX -= 48; // to 100
    // ami.style.outline = 1 + 'px' + ' solid blue';
  }

  //POSITION 3

  if (positionX < -100) {
    width = 42;
    positionX += 2; // to 46
    // ami.style.outline = 1 + 'px' + ' solid green';
  }

  //POSITION 4

  if (positionX < -148) {
    width = 32;
    ami.style.left = 50 + 'px';
    // ami.style.outline = 1 + 'px' + ' solid orange';
  }


  //POSITION 5

  if (positionX < -192) {
    width = 40;
    positionX += 16;
    ami.style.left = 40 + 'px';
    // ami.style.outline = 1 + 'px' + ' solid purple';
  }



  //POSITION 6

  if (positionX < -222) {
    width = 42;
    positionX -= 10;
    // ami.style.outline = 1 + 'px' + ' solid blue';
  }

  //POSITION 7

  if (positionX < -262) {
    width = 50;
    positionX -= 4;
    // ami.style.outline = 3 + 'px' + ' solid red';
  }

  //POSITION 8

  if (positionX < -306) {
    width = 50;
    positionX -= 10;
    // ami.style.outline = 3 + 'px' + ' solid green';
  }

  //POSITION 9

  if (positionX < -360) {
    width = 50;
    positionX -= 1;
    // ami.style.outline = 3 + 'px' + ' solid orange';
  }

  //POSITION 9

  if (positionX < -415) {
    width = 36;
    positionX += 6;
    // ami.style.outline = 3 + 'px' + ' solid purple';
  }

  //POSITION 10

  if (positionX < -464) {
    width = 40;
    positionX += 13;
    // ami.style.outline = 3 + 'px' + ' solid red';
  }

  if (positionX < -500) {
    positionX = -52;
  }

  console.log(positionX);

  ami.style.width = width + 'px';

  ami.style.backgroundPositionX = positionX + 'px';
  ami.style.backgroundPositionY = positionY + 'px';
}




punch.addEventListener('click', function() {

  positionX = 0;
  positionY = -470;
  ami.style.outline = 1 + 'px' + ' solid green';

  if (positionX = 0) {
    width = 60;
    positionX -= 50;
  }

  ami.style.width = width + 'px';

  ami.style.backgroundPositionX = positionX + 'px';
  ami.style.backgroundPositionY = positionY + 'px';

});





var intervalId = setInterval(animate, 200);
