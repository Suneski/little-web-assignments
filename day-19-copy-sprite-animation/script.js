var ami = document.querySelector('#ami');

var rain = document.querySelector('.rain');

var punch = document.querySelector('#punch');
var upperCut = document.querySelector('#upper-cut');
var highKick = document.querySelector('#high-kick');
var lowKick = document.querySelector('#low-kick');

var positionX = -52;
var width = 50;





// punch.addEventListener('click', function() {
//
//   positionY = -475;
//   positionX = 0;
//
//
//   ami.style.outline = 1 + 'px' + ' solid blue';
//
//
//   ami.style.width = width + 'px';
//
//   ami.style.backgroundPositionX = positionX + 'px';
//   ami.style.backgroundPositionY = positionY + 'px';
//
//
//
//   if (positionY <= 0) {
//     positionX -= 60;
//     width = 60;
//   }
//
// });





// upperCut.addEventListener('click', function() {
//
//   positionX = -206;
//   positionY = -475;
//   width = 70;
//
//   ami.style.outline = 1 + 'px' + ' solid green';
//
//
//   if (positionX === -206) {
//     positionX -= 206;
//     console.log(ami.style.width);
//     console.log(positionX);
//   }
//
//   if (positionX < -280) {
//     positionX -= 10;
//     console.log(positionX);
//   }
//
// });
//
//
//
//
//
// highKick.addEventListener('click', function() {
//
//   positionX = 0;
//   positionY = -610;
//   width = 60;
//
//   ami.style.outline = 1 + 'px' + ' solid red';
//
// });
//
//
//
//
//
// lowKick.addEventListener('click', function() {
//
//   positionX = -650;
//   positionY = -475;
//   width = 55;
//
//   ami.style.outline = 1 + 'px' + ' solid orange';
//
// });











var left = 50;


function animate() {

  var height;

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
    // ami.style.outline = 1 + 'px' + ' solid orange';
  }


  //POSITION 5

  if (positionX < -192) {
    width = 40;
    positionX += 16;
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
    width = 53;
    positionX -= 4;
    // ami.style.outline = 3 + 'px' + ' solid red';
  }

  //POSITION 8

  if (positionX < -306) {
    width = 55;
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
    width = 45;
    positionX += 13;
    // ami.style.outline = 3 + 'px' + ' solid red';
  }

  if (positionX < -500) {
    width = 48;
    positionX = -52;
  }

  ami.style.width = width + 'px';

  ami.style.backgroundPositionX = positionX + 'px';
  ami.style.backgroundPositionY = positionY + 'px';


}

var intervalId = setInterval(animate, 100);
